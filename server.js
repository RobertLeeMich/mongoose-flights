const express = require('express');
const flightRouter = require('./routes/flights');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/flights', flightRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
