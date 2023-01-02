"use strict";

var mongoose = require("mongoose");
var schema = mongoose.Schema({
  title: String,
  Description: String
}, imageUrl = {
  type: String
}, Comment = [{
  user_Id: {
    type: String
  },
  Username: {
    type: String
  },
  Comment: {
    type: String,
    required: [true, 'please add comment']
  },
  password: {
    type: String
  }
}], likes = [{
  user_id: {
    type: mongoose.schema.type.objectId,
    required: true,
    ref: "user"
  }
}], {
  timeStamps: true
});
module.exports = mongoose.model("Post", schema);