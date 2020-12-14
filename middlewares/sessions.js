const session = require('express-session');
const connectRedis = require('connect-redis');
const redis = require('redis');
const redisClient = redis.createClient();

const RedisStore = connectRedis(session);
const sessionDetails = session({
    store: new RedisStore({ host: 'localhost', port: 6379, client: redisClient, ttl: 86400 }),
    secret: 'omnious',
    saveUninitialized: true,
    resave: false,
    name: 'sessionId',
    cookie: {
        secure: false,
        // httpOnly: true,
        // maxAge: 1000 * 60 * 1
    }
});

module.exports = sessionDetails;