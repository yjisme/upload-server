class UploadError extends Error {
  constructor(code, msg) {
    super(msg);
    this.code = code;
  }
}

class ExtError extends UploadError {
  constructor() {
    super(1, '后缀名不符合要求');
  }
}

class SizeLimitError extends UploadError {
  constructor() {
    super(2, '文件过大');
  }
}

class UnexpectedRequest extends UploadError {
  constructor() {
    super(400, '无法理解的请求');
  }
}

exports.UploadError = UploadError;
exports.ExtError = ExtError;
exports.SizeLimitError = SizeLimitError;
exports.UnexpectedRequest = UnexpectedRequest;
