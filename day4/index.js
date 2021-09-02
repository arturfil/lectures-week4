const express = require('express');
const mongoose = require('mongoose');

// setup the app varaible to the express method/function
const app = express();

// mongodb connection
mongoose.connect('mongodb://localhost/dcuniverse')
  .then(() => console.log('Database Connected...'));

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
app.use('/dog', require('./routes/hero'));

const port = 5000; // google takeshi
app.listen(port, () => {
  console.log('Server running...');
})
// port & listen method