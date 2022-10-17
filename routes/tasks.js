const express = require('express');
const Task = require('../models/Task');

const https = require('https');



const router = express.Router();


// get all tasks
router.get('/', (req, res) => {
    https.get('https://610e-174-95-129-74.ngrok.io/task/request', (resp) => {

            // console.log(resp);
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

    res.send("adding a task");

})


// get all tasks
router.get('/request', (req, res) => {
    console.log("listening requests")
    console.log(JSON.stringify(req.headers));
    res.send("Got the request");
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