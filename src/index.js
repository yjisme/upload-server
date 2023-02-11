const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(config.global.publicPath));

app.use('/upload/single', require('./upload/single'));

app.use((err, req, res, next) => {
  const { UploadError } = require('./upload/errorTypes');
  if (err instanceof UploadError) {
    res.send({
      errCode: err.code,
      errMsg: err.message,
    });
  }
  console.log(err);
});

app.listen(config.global.port, () => {
  console.log(`server start on port ${config.global.port}`);
});
