const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
  city1: String,
  city2: String,
  stateCode: String,
  outboundDate: {
    type: Date,
    default: Date.now
  }
});

const Search = mongoose.model("Search", SearchSchema);

module.exports = Search;