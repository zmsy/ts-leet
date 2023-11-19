# Design a URL Shortener

Problem: designing a URL shortening service like tinyurl.

As always, start with problem clarification:

1. Example is https://www.example.com?param1=this&param2=that&param3=those shows up as https://tiny.boi/f7eOiju
2. 100M URLs generated per day
3. Shortened URL should be as short as possible
4. Chars can be a-zA-Z0-9
5. Cannot be deleted or updated
6. Data must be retained for 10 years

API:

- `POST /api/v2/data/shorten` - Given a URL, return shorter url
- `GET api/v1/shortUrl` - Given a short url, return the original URL
- High availability, scalability, and fault tolerance

Service should return a 301 when called, since that indicates a permanent redirect (302 is temporary).

## Notes on Implementation

- SHA-256 has 2^256 space, so the chances of a collision are astronomically low. in the event that happens, we can use open-addressing like a hashmap.
- It's not an n-choose-k problem, because that's for combinations and permutations are fine. 
- Hash-chaining, aka using multiple hashes, is a valid way to avoid collisions even further.
- 


