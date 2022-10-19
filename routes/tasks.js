const express = require('express');
const Task = require('../models/Task');

const cors = require('cors');


const router = express.Router();

const corsOpts = {
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    allowedHeaders: ['Content-Type',],
};

app.use(cors(corsOpts));

router.get('/', async (req, res) => {
    const tasks = await Task.find({});
    res.send(tasks);
})

router.post('/add', (req, res) => {

    const task = Task({
        task: req.body.task,
        description: req.body.description,
        status: req.body.status
    })

    task.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json({message: err});
    })
})

module.exports = router;
