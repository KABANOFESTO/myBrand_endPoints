"use strict";

var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var articleSchema = _joi["default"].object({
  title: _joi["default"].string().min(10).required(),
  content: _joi["default"].string().min(20).required(),
  image: _joi["default"].required()
});
var updateArticleSchema = _joi["default"].object({
  article_id: _joi["default"].string().required(),
  title: _joi["default"].string().min(10),
  content: _joi["default"].string().min(20)
});
var createUserSchema = _joi["default"].object({
  username: _joi["default"].string().required().min(4),
  email: _joi["default"].string().email().required(),
  password: _joi["default"].string().min(6).required(),
  confirm_password: _joi["default"].ref('password')
});
var loginUserSchema = _joi["default"].object({
  email: _joi["default"].string().email().required(),
  password: _joi["default"].string().min(6).required()
});
var messageSchema = _joi["default"].object({
  name: _joi["default"].string().required(),
  email: _joi["default"].string().email().required(),
  message: _joi["default"].string().min(6).required()
});
module.exports = {
  articleSchema: articleSchema,
  updateArticleSchema: updateArticleSchema,
  createUserSchema: createUserSchema,
  loginUserSchema: loginUserSchema,
  messageSchema: messageSchema
};