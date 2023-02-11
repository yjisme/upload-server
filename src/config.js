const path = require('path');

exports.global = {
  port: 9527,
  publicPath: path.resolve(__dirname, '../public'),
  uploadPath: path.resolve(__dirname, '../public/upload'),
};
