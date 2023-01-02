"use strict";

var _express = _interopRequireDefault(require("express"));
var _userController = require("../controllers/userController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post('/login', _userController.LoginUser);
router.post('/signUp', _userController.createNewUser);
module.exports = router;