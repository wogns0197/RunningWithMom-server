import mongoose from 'mongoose';

const Schema = mongoose.Schema({
  // key: [String],
  year: Number,
  month: Number,
  day: Number,
  goal: Number,
  weather: String,
  strength: String,
  memo: String,
});

const DataSchema = mongoose.model('DBdata', Schema);

export default DataSchema;