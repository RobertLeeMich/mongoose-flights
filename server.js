const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//debug log
console.log(__dirname)
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

let flights = [
  //data to show for testing
  { airline: 'American', flightNo: 123, departs: '2023-09-12T12:00:00Z' },
];

app.get('/flights', (req, res) => {
  //debug log
  console.log('Trying to render Index view.');
  res.render('flights/Index', { flights });
});

app.get('/flights/new', (req, res) => {
  res.render('flights/New');
});

app.post('/flights', (req, res) => {
  const newFlight = req.body;
  flights.push(newFlight);
  res.redirect('/flights');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
