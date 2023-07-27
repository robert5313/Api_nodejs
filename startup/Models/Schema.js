const mongoose = require('mongoose');
const Schema = mongoose.Schema

const taskSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    Task: {
        type: String,
        default: "New"
    },
    DueDay: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('task', taskSchema)