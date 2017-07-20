const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('GET');
});

router.post('/', (req, res) => {
  res.status(201).send('POST');
});

router.put('/', (req, res) => {
  res.status(200).send('PUT');
});

router.delete('/', (req, res) => {
  res.status(200).send('DELETE');
});

module.exports = router;