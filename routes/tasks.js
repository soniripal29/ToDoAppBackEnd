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


router.post('/complete', async (req, res) => {
    await Task.findOneAndUpdate({_id: req.body._id}, {"status": "complete"});
    res.json({ message: 'Task completed successfully' });
})


router.post('/update', async (req, res) => {
    await Task.findOneAndUpdate({_id: req.body._id}, {"task": req.body.task, "description": req.body.description});
    res.json({ message: 'Task updated successfully' });
})

module.exports = router;
