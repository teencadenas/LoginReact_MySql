const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const autrouters = require(`./routers/autrouters`)

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', autrouters);

app.listen(3001, () => {
  console.log('Servidor corre en el port 3001');
});