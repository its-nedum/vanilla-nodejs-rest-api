const mongoose = require('mongoose');
const { Schema } = require('mongoose')

// create user schema
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    }
});

// create a model
const User = mongoose.model('User', userSchema);

module.exports = User;