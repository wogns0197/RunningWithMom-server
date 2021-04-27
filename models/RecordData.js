import mongoose from 'mongoose';

const dataSchema = mongoose.Schema({
  key: [String],
  year: Number,
  month: Number,
  day: Number,
  goal: Number,
  record: Number,
  weather: String,
  strength: String,
  memo: String,
});

const userSchema = mongoose.Schema({
  id: String,
  name: String,
  age: String,
  pw: String,
});

export const RecordData = mongoose.model('DBdata', dataSchema);
export const UserData = mongoose.model('LoginDB', userSchema);
