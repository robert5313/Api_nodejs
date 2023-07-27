require('dotenv').config();
const mongoose = require('mongoose');

const User = require('./models/UserModel');


mongoose.connect(MONGO_URI)
.then(() => {
    console.log('Database connection established');
}).catch((error) => {
    console.log(error);
});
module.exports = mongoose.db;