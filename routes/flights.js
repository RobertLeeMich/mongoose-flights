const express = require('express');
const router = express.Router();

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
