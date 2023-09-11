const React = require('react');

function New() {
  return (
    <div>
      <h1>Create New Flight</h1>
      <form action="/flights" method="post">
        {/* Your existing form elements here */}
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

module.exports = New;
