const path = require('path');

exports.global = {
  port: 9527,
  publicPath: path.resolve(__dirname, '../public'),
  uploadPath: path.resolve(__dirname, '../public/upload'),
};

exports.single = {
  sizeLimit: 1 * 1024 * 1024,
  exts: ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'],
  fieldName: 'avatar',
};
