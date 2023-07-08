const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
        
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    roles: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    timestamp: {
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;