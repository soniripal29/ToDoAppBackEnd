const express = require('express');
const Task = require('../models/Task');

const https = require('https');



const router = express.Router();



router.get('/', async (req, res) => {
    const tasks = await Task.find({});
    res.send(tasks);
})


// get all tasks
// router.get('/request', (req, res) => {
//     console.log("listening requests")
//     console.log(JSON.stringify(req.headers));
//     res.send("Got the request");
// })

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
