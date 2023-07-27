const {default: mongoose} = require('mongoose');
const UserList = require("../models/UserModel")

const getUser = async (req, res) => {
    const User = await UserList.find({}).sort({createdAt: -1})
    res.status(200).json(User)
}

const getsingleUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task available.'})
    }
    const User = await UserList.findById(id)

    if(!User) {
        return res.status(404).json({error: 'No such task available.'})
    }

    res.status(200).json(task)
}

const addUser = async (req, res) => {
    const {title, Task, DueDay} = req.body

    try{
        const User = await UserList.create({title, Task, DueDay})
        res.status(200).json(User)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

const editUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Task is available'})
    }

    const User = await UserList.findByIdAndUpdate({_id: id})

    if(!User) {
        return res.status(404).json({error: 'No such task available'})
    }
    res.status(200).json(User)
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such User is available'})
    }

    const User = await UserList.findByIdAndUpdate({_id: id})

    if(!User) {
        return res.status(404).json({error: 'No such User available'})
    }
    res.status(200).json(User)
}

module.exports = {
    getUser,
    getsingleUser,
    addUser,
    editUser,
    deleteUser
}