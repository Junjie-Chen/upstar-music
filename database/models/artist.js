const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const albumSchema = require('./album');

const artistSchema = new Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [albumSchema]
});
