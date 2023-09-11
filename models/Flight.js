const Destination = require('./Destination');

class Flight {
  constructor(airline, flightNo, departs, airport = 'SAN', destinations = []) {
    this.airline = airline;
    this.flightNo = flightNo;
    this.departs = departs || new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    this.airport = airport;
    this.destinations = destinations;
  }
}

const flightData = [];

module.exports = {
  Flight,
  flightData
};
