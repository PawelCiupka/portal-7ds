const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    room: String,
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);