const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
  },
  arrival: Date
});

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function() {
      return new Date().setFullYear(new Date().getFullYear() + 1);
    },
  },
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    default: 'SAN'
  },
  destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);
