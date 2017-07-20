const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the kitten API! 😺');
});

app.listen(3000, () => {
  console.log('Kitten API 😺 server listening on port 3000!');
});