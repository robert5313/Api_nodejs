require('dotenv').config();
const mongoose = require('mongoose');

const User = require('./models/UserModel');


mongoose.connect("mongodb+srv://rkiptoo5244:Userbase@cluster0.63djasb.mongodb.net/userbase?retryWrites=true&w=majority")
.then(() => {
    console.log('Database connection established');
}).catch((error) => {
    console.log(error);
});
module.exports = mongoose.db;