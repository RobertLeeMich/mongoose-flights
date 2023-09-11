const express = require('express');
const router = express.Router();
const flightData = [];

router.get('/', (req, res) => {
  res.render('Index', { flights: flightData });
});

router.get('/new', (req, res) => {
  res.render('flights/New');
});

router.post('/', (req, res) => {
  const { airline, flightNo, departs, airport } = req.body;
  const flight = { airline, flightNo, departs, airport, destinations: [] };
  flightData.push(flight);
  res.redirect('/flights');
});

router.get('/:id', (req, res) => {
  const flight = flightData[req.params.id];
  res.render('Show', { flight, id: req.params.id });
});

router.post('/:id/destinations', (req, res) => {
  const { airport, arrival } = req.body;
  const flight = flightData[req.params.id];
  flight.destinations.push({ airport, arrival });
  res.redirect(`/flights/${req.params.id}`);
});

module.exports = router;
