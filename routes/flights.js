const express = require('express');
const router = express.Router();

let flights = [
  { airline: 'American', flightNo: 123, departs: '2023-09-12T12:00:00Z' },
];

router.get('/', (req, res) => {
  res.render('Index', { flights });
});

router.get('/new', (req, res) => {
  res.render('New');
});

router.post('/', (req, res) => {
  const newFlight = req.body;
  flights.push(newFlight);
  res.redirect('/flights');
});

module.exports = router;
