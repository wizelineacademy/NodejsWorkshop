const express = require('express');
const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to the kitten API! 😺');
});

app.listen(3000, () => {
  console.log('Kitten API 😺 server listening on port 3000!');
});