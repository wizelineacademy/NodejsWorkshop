const router = require('express').Router();

const api = require('./api');
const health = require('./health');

// Whenever a user goes to http://foo.bar/api,
// the API router we created will handle that routing.
router.use('/api', api);

// Same for the health check
router.use('/health', health);

module.exports = router;