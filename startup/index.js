const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require("./Routes/task-routes")
require('dotenv').config()

const logger = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/taskList', taskRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(  () => {
        app.listen(process.env.PORT, () => {
            console.log(`Database connected successfully`, process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })