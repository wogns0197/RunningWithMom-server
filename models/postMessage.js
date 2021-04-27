import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  key: [String],
  year: Number,
  month: Number,
  day: Number,
  goal: Number,
  weather: String,
  strength: String,
  memo: String,
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;