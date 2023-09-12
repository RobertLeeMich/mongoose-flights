const React = require('react');

function New() {
  return (
    <div>
      <h1>New Flight</h1>
      <form action="/flights" method="post">
        <div>
          <label>Airline</label>
          <input type="text" name="airline" />
        </div>
        <div>
          <label>Flight Number</label>
          <input type="number" name="flightNo" />
        </div>
        <div>
          <label>Departs</label>
          <input type="datetime-local" name="departs" />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
      <div>
  <label>Airport</label>
  <select name="airport">
    <option value="AUS">AUS</option>
    <option value="DAL">DAL</option>
    <option value="LAX">LAX</option>
    <option value="SAN">SAN</option>
    <option value="SEA">SEA</option>
  </select>
</div>

    </div>
  );
}

module.exports = New;
