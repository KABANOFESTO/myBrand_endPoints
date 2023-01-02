"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _routers = _interopRequireDefault(require("./routers"));
var _cors = _interopRequireDefault(require("cors"));
var _passport = _interopRequireDefault(require("passport"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var _require = require('express'),
  json = _require.json;
var fileUploader = require('express-fileupload');
var _require2 = require('../config/db.config'),
  dbConnect = _require2.dbConnect;

// mongoose.set('strictQuery', false)