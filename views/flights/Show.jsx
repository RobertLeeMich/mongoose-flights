const React = require('react');

function Show(props) {
  const { flight, id } = props;
  return (
    <div>
      <h1>Flight Details</h1>
      <p>Airline: {flight.airline}</p>
      <p>Flight No: {flight.flightNo}</p>
      <p>Departs: {flight.departs.toString()}</p>
      <p>Airport: {flight.airport}</p>

      <h2>Add Destination</h2>
      <form action={`/flights/${id}/destinations`} method="post">
        <div>
          <label>Airport:</label>
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
        </div>
        <div>
          <label>Arrival:</label>
          <input type="datetime-local" name="arrival" />
        </div>
        <button type="submit">Add Destination</button>
      </form>

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
