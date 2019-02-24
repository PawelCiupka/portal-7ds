const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    room: String,
    email: String,
    password: {
        type: String,
        set: hashPassword
    },
    access: {
        type: String
    },
    role: {
        type: String,
        default: 'NormalUser'
    }
}, {
        timestamps: true
    });

function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

UserSchema.methods.verifyPassword = function (password) {
    bcrypt.hash(password, 10, function (err, hash) {
        let passwordHash = hash;
    });

    return this.password === passwordHash;
}

module.exports = mongoose.model('User', UserSchema);