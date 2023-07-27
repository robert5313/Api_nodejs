const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema ({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        enum: ['user', 'admin'],
        default: ['user']
    }
},  {timestamps: true});

module.exports = mongoose.model('User', UserSchema)