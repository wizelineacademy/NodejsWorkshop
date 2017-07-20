const PouchDB = require('pouchdb');
const db = new PouchDB('kittens');

module.exports = db;