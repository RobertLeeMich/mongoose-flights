require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const Flight = require('./models/Flight');
const mongoose = require('mongoose');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.set('views', path.join(__dirname, 'views'));

//// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

app.use(express.urlencoded({ extended: false }));

let flights = [
  { airline: 'American', flightNo: 123, departs: '2023-09-12T12:00:00Z' },
];

// Index
app.get('/flights', async (req, res) => {
  const flights = await Flight.find({});
  res.render('flights/Index', { flights });
});

// New Flight
app.post('/flights', async (req, res) => {
  await Flight.create(req.body);
  res.redirect('/flights');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
