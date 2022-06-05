const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const cors = require('cors');

const port = 5000;

app.use(cors());

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});