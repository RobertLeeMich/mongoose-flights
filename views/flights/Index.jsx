const React = require('react');

function Index(props) {
  return (
    <div>
      <h1>All Flights</h1>
      <ul>
        {props.flights.map((flight, index) => (
          <li key={index}>
            {flight.airline} - {flight.flightNo} - {new Date(flight.departs).toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = Index;
