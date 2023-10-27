# Design a Key-Value Store

Problem: A key-value store is a non-relational database where a unique identifier (key) is stored with its associated value (value).

Example: Key = `last_login`, Value = `1698350062485`

- Keys can be plaintext or hashed values
- Values are normally opaque byte arrays.

Your goal is to design a key-value store that supports these operations:

- `put(key, value)` - Insert 'value' associated with 'key'
- `get(key)` - Get value associated with 'key'

## Problem Discussion

What are the requirements for a system like this?

1. Small key-value pair size: 10kb
2. Ability to store big data if needed
3. High availability - The system responds quickly, even during failures.
4. High scalability - Can be scaled to support lots of data
5. Automatic scaling - Servers should scale w/ traffic
6. Tunable consistency
7. Low latency

## Overview

Check out the [CAP Theorem](/system-design/lib/cap-theorem.md) bit in the meantime.

### The most simple approach: A single server

Developing a key-value store on a single server is pretty straightforward; a basic approach is just to use an in-memory hash table (obvious space constraints here).

Two optimizations to help:

1. Data compression
2. Store only frequently used data in memory and the rest on disk.

Even with optimizations, we can reach capacity quite quickly here.

### Data Partitioning

Let's overcome the single-server issue. Let's partition the data. To do that, let's use [consistent hashing](/system-design/lib/consistent-hashing.md)! Gives us some advantages:

1. Automatic scaling
2. Heterogeneity

Let's turn our original single server into a _coordinator_ server, and make it handle the ingress. It'll act as a proxy between the client and the individual nodes.

### Data replication

In order to achieve high availability, data must be replicated asynchronously. We can do this over _N_ servers (and make _N_ configurable). In a consistent hashing world, this means we replicate to the first _N_ servers found clockwise in the hash ring.

_N_ should mean *physical* servers in this case, because if it's three colocated virtual nodes you're in for a world of hurt when that tornado hits.

### Consistency

To replicate data, it must be synchronized across replicas. Quorum consensus gives some consistency guarantees for read/write operations. Definitions:

- **N** = number of replicas.
- **W** = Write quorum of size _W_, minimum number of write ACKs to consider successful. Doesn't necessarily have to be _N_. You could have N = 3, and W = 2.
- **R** = Read quorum, how many servers must respond for read to be successful.

Configuration of these values is a tradeoff between latency and consistency. Setting R = 1 or W = 1 ensures speed, but lower availability. R > 1 or W > 1 offers higher consistency, but slower response times. If you have **W + R > N**, strong consistency is guaranteed. Example: W = 2, R = 2, N = 3.

Different models:

1. Strong consistency - Any read operation returns the most updated written value. No client sees out-of-date data.
2. Weak consistency - Subsequent read operations are not guaranteed to see most updated value.
3. Eventual consistency - (Subform of weak consistency) Given enough time, all updates are propagated and all clients will see most recent data. This is used by **Dynamo and Cassandra**.

### Versioning

Replication gives high availability but causes inconsistencies. **Versioning** and **vector clocks** are methods to deal with this issue.

What's a **vector clock**?

- A `[server, version]` pair associated with a data item.
- Can be used to check if a version precedes, succeeds, or is in conflict with others.

When a data item _D_ is written to server _S_, it does an update / upsert-y thing:

- Increment `$version` if [_S_, `$version`] exists
- Otherwise, create entry [_S_, 1]

When writes to other servers occur, it'll include those in the vector clock:

- Write to S1 -> `[(S1, 1)]`
- Write to S1 -> `[(S1, 2)]`
- Write to S2 -> `[(S1, 3), (S2, 1)]`

If there were concurrent (conflicting) writes to two different servers at the same time, you'd end up with two vector clocks (_X_ and _Y_) and there's a conflict if any of _Y_'s counters are less than a corresponding counter in _X_ or vice versa.

Lastly, vector clocks are usually limited time-wise.

### Handling Failures

Failures are inevitable and common in any sufficiently large system.

- Insufficient to believe a single report that a server is down. Requires at least two independent sources of information.
- All-to-all multicasting is the most simple version, but it's inefficient with large numbers of servers.

#### Gossip Protocol

- Each node has a membership list
- Each node periodically increments its heartbeat counter
- Heartbeats are periodically sent to random nodes
- When nodes receive heartbeats, they update their membership list
- If no heartbeat for more than _n_ minutes/seconds/etc, it's considered offline.

If a single node considers another offline, it sends that information to other nodes that can corroborate it if they also don't have recent heartbeats.

#### Temporary Failures

- **Sloppy quorum** - Instead of enforcing quorum requirement, system just chooses the first _W_ healthy servers for writes and first _R_ healthy servers for reads.
- When a server is down, another will have to process writes/reads temporarily. When it comes back up, changes will be pushed back to achieve consistency ('hinted handoff')

### Single-node Write/Read Path

Write path:

1. Write to a commit log
2. Load the data into an in-memory cache
3. When the cache reaches a certain size, data is flushed to disk

Read path:

1. Check in-memory cache
2. If not there, load from disk. This uses a bloom filter to accurate know where on disk
