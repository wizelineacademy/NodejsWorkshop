const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('All systems operational. 👍🏼');
});

module.exports = router;