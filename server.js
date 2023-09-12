require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Flight = require('./models/Flight');
const app = express();

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// app.use(express.static('public'));

//Index
app.get('/flights', async (req, res) => {
  const flights = await Flight.find({});
  res.render('flights/Index', { flights });
});

//New
app.get('/flights/new', (req, res) => {
  res.render('flights/New');
});

app.post('/flights', async (req, res) => {
  await Flight.create(req.body);
  res.redirect('flights');
});

//Show
app.get('/flights/:id', async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  res.render('flights/Show', { flight });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
