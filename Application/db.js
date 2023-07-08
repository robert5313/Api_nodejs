require('dotenv').config();
const mongoose = require('mongoose');

const User = require('./models/UserModel');


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Database connection established');
}).catch((error) => {
    console.log(error);
});

module.exports = db;