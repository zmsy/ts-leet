# Design a Modern Web Application

Problem: You want to launch a new service that will scale. How do you do it?

## Architecture Areas

Things to cover:

    - Frontend
    - DNS
    - Load-balancing
    - App-layer servers
    - Database
    - Caching
    - Asynchronous queues (Kafka, SQS, etc)

### Frontend

- **Flat-file Host** - Depending on whether you're serving an SPA or not, you could choose to host all of your frontend files on a flat-file host like Netlify or Github Pages Enterprise.
- **CDN** - Putting your static content behind a CDN like Cloudflare is a really good idea, since it will improve load speeds and reduce load on your servers. If you're doing this, make sure that you're including content hashes in your filenames and HTTP headers.
- **SSR** - If you're intending on doing server-side rendering, it makes sense likely to keep application servers and frontend servers the same for a while. Modularizing your frontend code so that it can be easily split off into a separate service is important. If the cost of rendering is high, it's worth having your own frontend servers. Nowadays these also might be running a different full-stack service like Next.js or similar.
- **Testing** - Most often frontend tests will consist of:
    1. Testing Library-type unit tests for frontend components
    2. Frontend TS/JS library unit tests
    3. End-to-end tests for common flows
    4. If you're already in production, synthetic regression tests for known patterns

### DNS

Your application likely has some DNS entries for it, and they're used to send things to the right place.

1. **Stages** (dev/prod/test/etc) should be split out into separate environments, preferably keeping the demo/stage/etc stuff resolved only on internal DNS servers and closed to the outside world.
2. **Load-balancer** should be where the routes are set up to resolve by default, so that it can utilize multiple application servers.
3. Blue-green deployments can be done via DNS, but it seems like it's more normal to do those at the load-balancer level.

### Load-balancing

Load balancing allows you to achieve a few things that sending traffic directly to a single server does not.

1. TLS termination - You can put your certs on your load balancer and have them be updated in a single place, as opposed to do cert management on your actual servers.
2. Containers - Docker/k8s/etc can be used more easily when there's no DNS configuration required to send the traffic to different routes. It allows you to do things like canary deployments, blue-green deployments, etc.
3. Shift traffic according to heuristics as needed: If a single application server is taking a long time to respond or is overloaded, it can shift load to other application servers.
4. Often done these days using AWS ALB/ELB or similar service.

### App-Layer Servers

Services these days are often containerized and run in some sort of control plane: AWS ECS, Kubernetes, Elastic Beanstalk, etc.

- Multiple application servers is common, usually will be deployed in a pod.
- 

#### APIs

- **REST** - Representational State Transfer, objects are defined by routes and are acted on by HTTP verbs.
    - Strengths: Simple, Widely used, lots of available tooling
    - Weaknesses: Adding new entities requires adding new routes, not as space efficient as RPC
- **RPC** - Basically like function calls across a network, best for backend-to-backend services
    - Strength: Binary protocols like protobuf/messagepack, typed definitions + schemas
    - Cons: Only for backend service-to-service calls, iterating on schemas is hard, network faults can be confusing to debug
- **GraphQL** - That whole thing
    - Strengths: Client defines the query, nice frameworks, graphiql playground, type generation
    - Cons: Running it is miserable, n + 1 problems, federation is hard, [performance is awful in node](https://www.softwareatscale.dev/p/the-hidden-performance-cost-of-nodejs)

### Database

Data-layer is often one of the most important decisions that occurs, and can make or break your application.

#### SQL vs. NoSQL

**SQL**:

Choose this by default!

Pros:

- ACID transactions remove a lot of distributed system issues. Distributed transactions are hard, and usually require something like 2-phase commit.
- Can stand up a read replica with low latency for most single datacenters, and multi-az replication is possible with some lag.
- Joins + relational data modelling are good for application design.
- Varying isolation levels allow some configurability with regards to consistency for a given application's usage. Postgres is 'read committed' by default, but you could do 'serializable' for super important stuff.
- If you need unstructure data, just use a `jsonb` column.

Cons:

- B-Tree indices can slow down writes
- Running vacuum/analyze can be difficult
- If you need strong consistency, it can take longer to respond

**NoSQL**:

Encompasses many things, but this is largely meaning Key/Value dbs (Redis, memcached) and document stores (Mongo, DynamoDB). Also could be graph dbs like neo4j, but that's a special use case.

Pros:

- Faster to write, but potentially slower to read. Uses a Log-structured Merge Tree (LSMT)
- Good for "hot" data or actively used things.
- You can still do some data modeling on it, you can use an ORM like Mongoose etc. It's just schemaless so it creates 
- Some services offer sharding/scaling out of the box: Cassandra, Dynamo

Cons:

- No relational data modeling
- Strong consistency requirements and transactions aren't really a thing

Go for SQL first!

## Scaling The Service



