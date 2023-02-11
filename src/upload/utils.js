const path = require('path');

exports.generateUrl = function (req, filename, basePath = '/upload') {
  return `${req.protocol}://${req.header('host')}${basePath}/${filename}`;
};

exports.suffix = function (originalname, curName) {
  let ext = path.extname(curName);
  if (ext) {
    return curName;
  }
  ext = path.extname(originalname);
  if (!ext) {
    return curName;
  }
  return `${curName}${ext}`;
};
