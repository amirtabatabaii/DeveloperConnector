const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
const router = express.Router();

//Body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB by mongoose
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.use('/.netlify/functions/server', router);  // path must route to lambda

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
