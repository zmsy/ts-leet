# CAP Theorem

The CAP Theorem means it's impossible to have more than two of these three at the same time:

1. **Consistency** - All clients see the same data at the same time.
2. **Availability** - Any client which requests data gets a response, even if nodes are down.
3. **Partition Tolerance** - A communication break between two nodes; means the system can operate with network issues

CP + AP systems can exist in real life, but CA systems cannot because network failure is unavoidable.

## Example

Imagine three servers, N1 N2 and N3. If one server N3 goes down (partition! it's unavoidable), writes to N3 would be stale and it becomes lagged.

- Choosing availability - System accepts reads/writes even though N3 may return stale data when it comes back online.
- Choosing consistency - System rejects writes until N3 is back online. You'd do this if it's _absolutely critical_ that the system not be latent. Banks are an example.
