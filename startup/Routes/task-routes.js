const express = require('express');
const {
    getTask,
    getsingleTask,
    addTask,
    editTask,
    deleteTask
} = require("../Controllers/Task-Controller");

const router = express.Router()

router.get('/', getTask)

router.get('/:id', getsingleTask)

router.post('/', addTask)

router.patch('/:id', editTask)

router.delete('/:id', deleteTask)

module.exports = router