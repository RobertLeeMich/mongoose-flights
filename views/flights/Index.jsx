const React = require('react');

function Index(props) {
  return (
    <div>
      <h1>All Flights</h1>
      <ul>
        {props.flights.map((flight, index) => (
          <li key={index}>
            {flight.airline} - {flight.flightNo} - {new Date(flight.departs).toString()} 
            <a href={`/flights/${flight._id}`}>Detail</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = Index;
