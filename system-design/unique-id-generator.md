# Design a Unique ID Generator

As always, step 1 - clarify the requirements:

- Unique
- Numerical values only
- Fit into 64-bit
- Ordered by date
- Must be able to create 10k/second

## Problem discussion

The basic idea is to recreate a databases auto_increment feature where a monotonically increasing identifier. Hard to scale across datacenters.

UUIDs can be used. They don't work in this set of requirements: 128-bit, not sortable by time, non-numeric.

A **ticket server** is a single database id generating server that uses a single database for everywhere. Pros: Numeric IDs, easy to implement. Cons: Single point of failure.

## One approach - Multiple IDs concatenated

A distributed ID generation mechanism likely needs to include pieces to indicate where each comes from. Twitter's snowflake id mechanism is a good starting point.

1. Timestamp (from unix epoch)
2. Datacenter ID
3. Machine ID
4. Sequence number

These can all be concatenated into a single, sortable timestamp that is still unique enough to work.
