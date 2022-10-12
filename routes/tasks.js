const express = require('express');
const Task = require('../models/Task');

const router = express.Router();


// get all tasks
router.get('/', (req, res) => {
    console.log("adding a task");
    res.send("adding a task");
})

router.post('/add', (req, res) => {

    const task = Task({
        task: req.body.task,
        description: req.body.description
    })

    task.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json({message: err});
    })
})

module.exports = router;