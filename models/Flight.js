class Flight {
    constructor(airline, flightNo, departs) {
      this.airline = airline;
      this.flightNo = flightNo;
      this.departs = departs || new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    }
  }
  
  const flightData = [];
  
  module.exports = {
    Flight,
    flightData
  };
  