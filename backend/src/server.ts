import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';

const app = express();

app.get('/', (req, res) => {
  const msg = `Port: ${port} Env: ${env}`;
  res.send(msg);
});

app.listen(port, () =>
  console.log(`App listening on port ${port} with ${env} environment.`)
);
