import {RecordData, UserData} from './models/RecordData.js';

import { AuthURL } from './AUTH.js';
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

//post Record data
app.post('/api/inputdata', (req, res) => {
  const data = RecordData(req.body);
  console.log(req.body);
  data.save((err) => {
    if (err) return res.json({ message: err.message });
  });
  return res.status(200).json({
    success: true,
  });
});


//get Record data
app.get('/api/getdata', (req, res) => {
  RecordData.find({})
    .then(data => {
      // console.log("data moved from Mongo to React");
      console.log(res.json(data));
      return res.json(data);
    })
  .catch(err => console.log(err))
});

//login
app.post('/api/getLogin', (req, res) => {
  
  console.log(req.body);
  const header = req.header('Access-Control-Allow-Origin');
  console.log(header);
  UserData.find({"id":req.body.id})
    .then(data => {
      return res.json(data);      
    })
    .catch(err => console.log(err))
});

//signin
app.post('/api/signin', (req, res) => {
  const data = UserData(req.body);  
  data.save((err) => {
    if (err) return res.json({ message: err.message });
  });
  return res.status(200).json({
    success: true,
  });
})