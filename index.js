const redis = require('redis-mock');
const { promisfy } = require('promisfy');

const redisClient = redis.createClient();

redisClient.set = promisfy(redisClient.set);
redisClient.get = promisfy(redisClient.get);

module.exports = {
  createClient: () => redisClient,
};
