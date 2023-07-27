const express = require('express');
const {
    getUser,
    getsingleUser,
    addUser,
    editUser,
    deleteUser
} = require("../Controllers/User-Controller");

const router = express.Router()

router.get('/', getUser)

router.get('/:id', getsingleUser)

router.post('/', addUser)

router.patch('/:id', editUser)

router.delete('/:id', deleteUser)

module.exports = router