const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const cors = require('cors');
const sql = require('mssql');

const port = 5000;

app.use(cors());

app.use('/api', apiRouter);

async () => {
  console.log('anything???')
  try {
      // make sure that any items are correctly URL encoded in the connection string
      await sql.connect('Server=localhost,1433;Database=devjobs;User Id=SA;Password=yourStrong(!)Password;Encrypt=true')
      const result = await sql.query`select * from Jobs`;

      console.log(result)
  } catch (err) {
      // ... error checks
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});