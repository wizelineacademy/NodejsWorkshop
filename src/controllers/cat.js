const model = require('../models/cat');

const findCat = _id => {
  return model.find(_id)
    .then(kitten => {
      return `${kitten.name} is color ${kitten.color}`;
    })
    .catch(error => {
      console.log('findCat error:', error);
      return 'That cat doesn\'t exist 😿';
    });
};

const listCats = () => {
  return model.list()
    .then(kittens => {
      console.log(kittens);
      if(kittens.total_rows > 0) {
        const kittenList = kittens.rows.map(kitten => {
          const { doc } = kitten;
          return `Cat number ${doc._id}: ${doc.name}, color ${doc.color}`;
        });
        return kittenList;
      }
      return 'No kittens were found. 😿'      
    })
    .catch(error => {
      console.log('listCats error:', error);
      return 'Something went wrong 😿';
    });
}

const createCat = body => {
  const { name, color } = body;

  return model.add(name, color)
    .then(info => {
      return `Okie dokie! ${name}, the ${color} cat was created. 😻`;
    })
}

const updateCat = (_id, body) => {
  const update = {
    name: body.name,
    color: body.color
  };

  return model.update(_id, update)
    .then(result => {
      if(result.ok) {
        return 'Yay! The kitten was updated without any harm 😽';
      }
      return 'Uh, oh… something didn\'t go well… 🙀';
    })
    .catch(error => {
      console.log('updateCat error:', error);
      return 'I think that cat doesn\'t exist… 🙀';
    });
}

const removeCat = _id => {
  return model.remove(_id)
    .then(result => {
      if(result.ok) {
        return '*Snif* The kitten is now gone. 😿';
      }
      return 'Uh, oh… something didn\'t go well… 🙀';
    })
    .catch(error => {
      console.log('removeCat error:', error);
      return 'I think that cat doesn\'t exist… 🙀';
    });
}

module.exports = {
  findCat,
  listCats,
  createCat,
  updateCat,
  removeCat
}