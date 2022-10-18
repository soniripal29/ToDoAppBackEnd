const mongoose = require('mongoose');

let options = {
    timestamps: {
        createdAt: 'created_on',
        updatedAt: 'updated_on'
    }
};

const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
     },
    status: {
        type: String,
        default: "active",
        enum: ["active", "complete"]
    },
    description: String
}, options)

module.exports = mongoose.model('Task', TaskSchema);
