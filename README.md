async-redis-mock
============

# Background
Inspired by [redis-mock](https://www.npmjs.com/package/redis-mock) and [async-redis](https://www.npmjs.com/package/async-redis) this repo aims to provide a feature complete mock of `async-redis` which may be used interchangeably when writing unit tests for code that depends on `async-redis`.

All operations are performed in-memory, so no Redis installation is required.
