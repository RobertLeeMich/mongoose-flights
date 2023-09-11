const React = require('react');

function Show(props) {
  const { flight, id } = props;
  if (!flight) {
    return <div>Flight not found</div>;
  }
  return (
    <div>
      <h1>Flight Details</h1>
      <p>Airline: {flight.airline}</p>
      <p>Flight No: {flight.flightNo}</p>
      <p>Departs: {flight.departs.toString()}</p>
      <p>Airport: {flight.airport}</p>

      {/* Form for adding destinations */}
      {/* ... */}
      <h2>Destinations</h2>
      <ul>
        {flight.destinations.map((dest, i) => (
          <li key={i}>
            {dest.airport}, {new Date(dest.arrival).toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = Show;
