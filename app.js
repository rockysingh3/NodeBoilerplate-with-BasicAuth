const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

// initiain express
const app = express();

// setting up ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');


// rendering all the Routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));