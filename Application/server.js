require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/User-Routes');

const logger = require('morgan')
const app = express();

app.use(logger('dev'))
app.use(express.json())

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGODB_URI)
    .then(  () => {
        app.listen(process.env.PORT, () => {
            console.log(`Database connected successfully`, process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })