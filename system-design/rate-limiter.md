# Design a Rate Limiter

Problem: In a network system, a rate limiter is used to control the rate of traffic sent by a client or a
service. In the HTTP world, a rate limiter limits the number of client requests allowed to be
sent over a specified period. If the API request count exceeds the threshold defined by the
rate limiter, all the excess calls are blocked. 

## Problem Discussion

Goals of a solution like this:

- Prevent services from being overloaded by either legitimate or malicious traffic.
- Lower cost to service.
- Reduce peak consumption.

Information to consider:

1. What's the unique-ifying key for this traffic? What do we want to dedupe across?
2. Server-side or client-side?
3. How should users be warned if they're throttled?
4. What's the makeup of the system that's being rate-limited?

Requirements:

- Correctness: Accurately limit requests.
- Low latency
- Low memory consumption
- Specific exception is raised when the users hit their threshold.
- Distributed: Multiple application servers should have the same rate state
- Fault tolerance: If the rate-limiter does not work, the service must keep movin'
- Return a 429 when the client goes too far

## High-level design

* **Client-side or server-side?** - Generally, it doesn't make sense to put this client-side if part of the goal is to reduce malicious traffic. In that case, the client can likely just bypass the controls on their own end or send requests directly to the API.
* **Standalone service?** - I'd prefer to put this as middleware in some way, and reuse a similar connection/datastore. For me, redis seems like an obvious candidate for this sort of thing.
* **SaaS Offerings** - For AWS, API Gateway allows for per-resource routing and rate-limiting. One can configure all of the routes separtely if needed.
* **Buy or Build?** - Building a rate limiter can be a costly addition.

## Detailed Design / Scaling / Buy-in

### Rate Limiting Algorithms

- **Token Bucket** - Discrete units of time where "tokens" are added to bucket, where a specific allowance is defined. I.e. current minute, current hour, etc. Easy to implement, but simplistic so hard to tune.
- **Leaking Bucket** - Fixed-rate FIFO queue. Requests are processed at a specified rate. If queue is full, request is dropped. Cons: Bursty traffic means new requests get dropped.
- **Fixed-rate Window** - Fixed-rate quota. Stupidly simple. Issue is that this could cause burstiness around the edges of a given windows.
- **Sliding Window** - Keep request timestamps. Upon request 1. drop outdated requests and 2. If the number of requests in the trailing _n_ (minutes/seconds/etc) is larger than a specified size, reject the new request. Use a sorted set in Redis! Bad for memory usage, since it keeps all requests.

## Using Redis

- **INCR** operation is atomic, and returns the value after incrementing. https://redis.io/commands/incr/
- One can use a lua script _in_ redis to achieve most of the other approaches
- Sorted set token bucket, in a single `MULTI` in redis:
    - Drop old requests with `ZREMRANGEBYSCORE`
    - Fetch all elements of the set with `ZRANGE(0, -1)`
    - Add current request timestamp with `ZADD`
    - Set a TTL equivalent to rate-limiting interval

## Distributed systems issues

- Clients may not necessarily reach the same application server, or the same datacenter.
    - You can use a hash of some value to determine which rate-limiter for a given request.
    - Split rate-limiters up on a per-application, or per-partition basis.
- A service can end up in race conditions if the rate-limiting is done as part of a two-phase approach (read and _then_ write) because the counter may not be accurate afterwards.
- These are all application-level descriptions, where you can do lower level if desired. IPTables has some capabilities here.
- On the client-side, make sure to add sufficient backoff/retry logic.

## Monitoring

- At the most basic level, check the 4xx rate of the service and see if it's returning a high amount of 429s.
- Prepare in advance for bursty traffic. If we're having an event where there's expected to be a high volume coming in, adjust the rate-limiting algorithm parameters to work for that.

## Notes / Links / Etc
