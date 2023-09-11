const React = require('react');

function New() {
  return (
    <div>
      <h1>Create New Flight</h1>
      <form action="/flights" method="post">
        <div>
          <label>Airline:</label>
          <input type="text" name="airline" />
        </div>
        <div>
          <label>Flight No:</label>
          <input type="number" name="flightNo" />
        </div>
        <div>
          <label>Departs:</label>
          <input type="date" name="departs" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

module.exports = New;
