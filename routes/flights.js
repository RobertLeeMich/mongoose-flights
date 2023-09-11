const express = require('express');
const router = express.Router();
const { Flight, flightData } = require('../models/Flight');
const Destination = require('../models/Destination');

// ... Previous Routes

router.get('/:id', (req, res) => {
  const flight = flightData[req.params.id];
  res.render('flights/Show', { flight, id: req.params.id });
});

router.post('/:id/destinations', (req, res) => {
  const flight = flightData[req.params.id];
  const newDestination = new Destination(req.body.airport, req.body.arrival);
  flight.destinations.push(newDestination);
  res.redirect(`/flights/${req.params.id}`);
});

module.exports = router;
