const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
console.log(__dirname)
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

let flights = [
  //DATA TO SHOW FOR TESTING
  { airline: 'American', flightNo: 123, departs: '2023-09-12T12:00:00Z' },
];

app.get('/flights', (req, res) => {
  console.log('Trying to render Index view.');
  res.render('flights/Index', { flights });
});

app.post('/flights', (req, res) => {
  const newFlight = req.body;
  flights.push(newFlight);
  res.redirect('/flights');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
