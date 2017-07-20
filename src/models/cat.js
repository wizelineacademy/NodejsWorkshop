const db = require('../config/db/connection');

const CatSchema = (_id, name = 'Wizecat', color = 'Orange') => ({
  _id,
  name,
  color
});

const find = _id => {
  return db.get(_id)
    .catch(error => {
      console.log('Find error:', error);
      return Promise.reject(error);
    });
}

const list = () => {
  return db.allDocs({ include_docs: true })
    .catch(error => {
      console.log('Find error:', error);
      return Promise.reject(error);
    });
}

const add = (name, color) => {
  if (!name) {
    return Promise.reject('Name missing 😿');
  }
  if (!color) {
    return Promise.reject('Color missing 😿');
  }

  return db.info()
    .then(info => {
      const _id = info.doc_count;
      const kitten = CatSchema(_id.toString(), name, color);
      return db.put(kitten);
    })
    .catch(error => {
      console.log('Create error:', error);
      return Promise.reject(error);
    });
}

const update = (_id, {name = undefined, color = undefined}) => {
  return db.get(_id)
    .then(kitten => {
      const updatedKitten = Object.assign({}, kitten);
      if (name) {
        updatedKitten.name = name;
      }

      if (color) {
        updatedKitten.color = color;
      }

      return db.put(updatedKitten);
    })
    .catch(error => {
      console.log('Update error:', error);
      return Promise.reject(error);
    });
}

const remove = _id => {
  return db.get(_id)
    .then(kitten => {
      return db.remove(kitten);
    })
    .catch(error => {
      console.log('Delete error:', error);
      return Promise.reject(error);
    });
}

module.exports = {
  find,
  list,
  add,
  update,
  remove
}