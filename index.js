const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/apps', (req, res) => {
 res.send({some: 'cartoon' });
  // res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

