/* eslint-disable import/no-extraneous-dependencies */

const tap = require('tap');
const redis = require('./index');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

tap.test('createClient', async (t) => {
  t.type(redis.createClient(), 'RedisClient');
  t.end();
});

tap.test('set', async (t) => {
  const client = redis.createClient();

  t.equals(await client.set('test', 'val'), 'OK');
  t.end();
});

tap.test('get', async (t) => {
  const client = redis.createClient();

  await client.set('test', 'val');

  t.equals(await client.get('test'), 'val');
  t.end();
});

tap.test('set/get with timeout', async (t) => {
  const client = redis.createClient();

  t.equals(await client.set('timeout', 'val', 'EX', 1), 'OK');
  t.equals(await client.get('timeout'), 'val');

  await sleep(2000);

  t.equals(await client.get('timeout'), null);

  t.end();
});
