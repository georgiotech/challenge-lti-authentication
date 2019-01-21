const express = require('express');
const app = express();

const index = require('./routes/index.js');

function stub(req, res) {
  return res.send(`${req.url} not implemented`);
}

app.get('/', index)
app.get('/books', stub)
app.post('/users/lti', stub);

app.listen(3000, () => console.log(`Open http://localhost:3000 to see a response.`));