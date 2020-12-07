const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  search: [
    {
      city1:{
      type: String},
      city2:{
      type: String},
      stateCode:{
      type: String},
      outboundDate: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);