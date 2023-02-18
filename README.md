# 服务器接口文档

## 单文件上传

请求路径：`/upload/single`

请求方法：`POST`

消息格式：`multipart/form-data`

字段名称：`avatar`

允许的后缀名：`['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png']`

最大尺寸：`1M`

响应格式：`JSON`

响应结果示例：

```json
// 成功
{
  "data": "文件的访问地址"
}
// 失败：后缀名不符号要求
{
  "errCode": 1,
  "errMsg": "后缀名不符合要求"
}
// 失败：文件过大
{
  "errCode": 2,
  "errMsg": "文件过大"
}
```

## base64上传

请求路径：`/upload/base64`

请求方法：`POST`

消息格式：`json`，示例：

```json
{
  "ext": ".png",
  "avatar": "图片的base64格式",
}
```

允许的后缀名：`['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png']`

最大尺寸：`1M`

响应格式：`JSON`

响应结果示例：

```json
// 成功
{
  "data": "文件的访问地址"
}
// 失败：后缀名不符号要求
{
  "errCode": 1,
  "errMsg": "后缀名不符合要求"
}
// 失败：文件过大
{
  "errCode": 2,
  "errMsg": "文件过大"
}
```

## 二进制格式上传

请求路径：`/upload/binary`

请求方法：`POST`

消息格式：`binary (application/octet-stream)`

消息头：`x-ext: 文件的后缀名，例如.jpg`

直接在消息体中放置二进制数据

允许的后缀名：`['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png']`

最大尺寸：`1M`

响应格式：`JSON`

响应结果示例：

```json
// 成功
{
  "data": "文件的访问地址"
}
// 失败：后缀名不符号要求
{
  "errCode": 1,
  "errMsg": "后缀名不符合要求"
}
// 失败：文件过大
{
  "errCode": 2,
  "errMsg": "文件过大"
}
```

## 多文件上传

请求路径：`/upload/multi`

请求方法：`POST`

消息格式：`multipart/form-data`

字段名称：`photos`

允许的后缀名：`['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png']`

每个文件允许的最大尺寸：`1M`

允许的最大文件数量：`10`

响应格式：`JSON`

响应结果示例：

```json
// 成功
{
  "data": [
    "文件的访问地址1",
    "文件的访问地址2",
    "..."
  ]
}
// 失败：后缀名不符号要求
{
  "errCode": 1,
  "errMsg": "后缀名不符合要求"
}
// 失败：文件过大
{
  "errCode": 2,
  "errMsg": "文件过大"
}
// 失败：文件数量超过限制
{
  "errCode": 3,
  "errMsg": "文件数量超过要求"
}
```

