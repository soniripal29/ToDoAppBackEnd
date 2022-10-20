const express = require('express');
const Task = require('../models/Task');




const router = express.Router();


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
        res.json({ message: err });
    })
})

router.post('/delete', async (req, res) => {
    console.log(await Task.countDocuments({ _id: req.body._id }));
    await Task.deleteOne({ _id: req.body._id });

    console.log(await Task.countDocuments({ _id: req.body._id }));
    res.json({ message: 'Task deleted successfully' });
})

module.exports = router;
