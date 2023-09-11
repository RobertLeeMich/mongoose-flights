const express = require('express');
const router = express.Router();
const { Flight, flightData } = require('../models/Flight');

router.get('/', (req, res) => {
  res.render('flights/Index', { flights: flightData });
});

router.get('/new', (req, res) => {
  res.render('flights/New');
});

router.post('/', (req, res) => {
  const newFlight = new Flight(req.body.airline, req.body.flightNo, req.body.departs);
  flightData.push(newFlight);
  res.redirect('/flights');
});

module.exports = router;
