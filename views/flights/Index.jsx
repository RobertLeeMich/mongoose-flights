const React = require('react');

function Index(props) {
  return (
    <div>
      <h1>Flight List</h1>
      <ul>
        {props.flights.map((flight, i) => (
          <li key={i}>
            {flight.airline}, {flight.flightNo}, {flight.departs.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = Index
