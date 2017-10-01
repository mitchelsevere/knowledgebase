const express = require('express');
// initialize app
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// start server
app.listen(port, () => {
  console.log('Server started on port', port);
});
// get home route
app.get('/', (req, res) => {
  res.send('Hello World');
});