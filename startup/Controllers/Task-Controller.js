const {default: mongoose} = require('mongoose');
const TaskList = require("../Models/Schema")

const getTask = async (req, res) => {
    const task = await TaskList.find({}).sort({createdAt: -1})
    res.status(200).json(task)
}

const getsingleTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task available.'})
    }
    const task = await TaskList.findById(id)

    if(!task) {
        return res.status(404).json({error: 'No such task available.'})
    }

    res.status(200).json(task)
}

const addTask = async (req, res) => {
    const {title, Task, DueDay} = req.body

    try{
        const task = await TaskList.create({title, Task, DueDay})
        res.status(200).json(task)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

const editTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Task is available'})
    }

    const task = await TaskList.findByIdAndUpdate({_id: id})

    if(!task) {
        return res.status(404).json({error: 'No such task available'})
    }
    res.status(200).json(task)
}

const deleteTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Task is available'})
    }

    const task = await TaskList.findByIdAndUpdate({_id: id})

    if(!task) {
        return res.status(404).json({error: 'No such task available'})
    }
    res.status(200).json(task)
}

module.exports = {
    getTask,
    getsingleTask,
    addTask,
    editTask,
    deleteTask
}