const router = require('express').Router();
const controller = require('../controllers/cat');

router.get('/:_id', (req, res) => {
  const { _id } = req.params;

  controller.findCat(_id.toString())
    .then(kittenInfo => {
      res.status(200).send(kittenInfo);
    })
    .catch(error => {
      res.status(200).send(error);
    });
});

router.post('/', (req, res) => {
  controller.createCat(req.body)
    .then(kittenInfo => {
      res.status(201).send(kittenInfo);
    })
    .catch(error => {
      res.status(200).send(error);
    });
});

router.put('/:_id', (req, res) => {
  const { _id } = req.params;

  controller.updateCat(_id, req.body)
    .then(kittenInfo => {
      res.status(200).send(kittenInfo);
    })
    .catch(error => {
      res.status(200).send(error);
    });
});

router.delete('/:_id', (req, res) => {
  const { _id } = req.params;

  controller.removeCat(_id)
    .then(kittenInfo => {
      res.status(200).send(kittenInfo);
    })
    .catch(error => {
      res.status(200).send(error);
    });
});

module.exports = router;