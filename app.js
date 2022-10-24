const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

// get port from start script
var args = process.argv.slice(2);

const app = express();
app.use(bodyParser.json());

const corsOpts = {
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH', 'OPTION'],
};

app.use(cors(corsOpts));


// connect to db
mongoose.connect(process.env.DB_CONNECTION,
    () => {
        try {
            console.log("Connected to DB!")
        }catch (e){
            console.log(e);
        }
    }
)

// import routes
const taskRoutes = require('./routes/tasks');

app.use('/task', taskRoutes);

// listen to request
app.listen(args[1])
