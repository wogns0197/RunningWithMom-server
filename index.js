import { AuthURL } from './AUTH.js';
import DataSchema from './models/postMessage.js';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

const app = express();

const CONNECTION_URL = AuthURL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);

app.use(express.json({ extended: true}))
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/inputdata', (req, res) => {
  const data = DataSchema(req.body);

  data.save((err) => {
    if (err) return res.json({ message: err.message });
  });
  return res.status(200).json({
    success: true,
  });
});

