const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
app.use(bodyParser.json());

// connect to db
mongoose.connect(process.env.DB_CONNECTION,
    () => console.log("Connected to DB!")
)

// import routes
const taskRoutes = require('./routes/tasks');

app.use('/task', taskRoutes);

// listen to request
app.listen(3000)
