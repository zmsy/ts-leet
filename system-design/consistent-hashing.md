# Design Consistent Hashing

Problem: To achieve horizontal scaling, it is important to distribute requests/data efficiently and evenly
across servers. Consistent hashing is a commonly used technique to achieve this goal.

## Problem Discussion

Basic approach: If you've got _n_ servers, it's common to derive which cache the request should hit with something like:

```js
const serverIndex = hash(request) % n;
```

Pros: Works well when the number of servers is fixed and data distribution is even.
Cons: Doesn't work well if servers go offline or if they're added.

**[Consistent hashing](https://en.wikipedia.org/wiki/Consistent_hashing)** solves this sort of problem. Definition:

_"Consistent hashing is a special kind of hashing such that when a hash table is re-sized and consistent hashing is used, **only k/n keys need to be remapped** on average, where **k is the number of keys**, and **n is the number of slots**. In contrast, in most traditional hash tables, a change in the number of array slots causes nearly all keys to be remapped"_

## High-level architecture

The way to implement consistent hashing is:

1. Map servers onto a hash ring-like structure using a uniformly distributed hash function, like sha-256 or similar.
2. Each node (actual server) is assigned multiple ranges within the ring, determined by hashing that node's identifier.
3. When data needs to be stored or retrieved, the hash of the data is used to compute its position on the ring. The system then finds the first node clockwise from that position.

Used in a variety of real-world systems:

- DynamoDB partitioning
- Discord chat
- Data partitioning across clusters in Cassandra
- Akamai CDN
