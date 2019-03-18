const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

// initiain express
const app = express();

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// setting up ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');


// BodyParser
app.use(express.urlencoded({ extended: false }));


// rendering all the Routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));