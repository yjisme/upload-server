const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(config.global.publicPath));

app.listen(config.global.port, () => {
  console.log(`server start on port ${config.global.port}`);
});
