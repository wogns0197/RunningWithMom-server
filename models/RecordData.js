import mongoose from 'mongoose';

const dataSchema = mongoose.Schema({
  key: [String],
  userid: String,
  year: Number,
  month: Number,
  day: Number,
  goal: Number,
  records: Number,
  weather: String,
  strength: String,
  memo: String,
});

const userSchema = mongoose.Schema({
  id: String,
  pw: String,
  name: String,
  age: Number,  
});

export const RecordData = mongoose.model('DBdata', dataSchema);
export const UserData = mongoose.model('LoginDB', userSchema);
