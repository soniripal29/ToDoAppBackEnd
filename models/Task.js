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
    status: {
        type: Boolean,
        default: false
    },
    description: String
}, options)

module.exports = mongoose.model('Task', TaskSchema);