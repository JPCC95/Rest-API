const express = require('express');
const app = express();
const users = require('./routes/users')
const mongoose = require('mongoose');
require('dotenv/config');

//Body-parser Middleware
app.use(express.json());

//Users Route Middleware
app.use('/users', users);

//Home Route
app.get('/', (req, res) => {
    res.send('Home')
});

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, () => {
    console.log('Connected to MongoDB!')
});

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`));