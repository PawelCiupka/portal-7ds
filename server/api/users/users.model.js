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
        default: 'normal'
    },
    status: {
        type: String,
        default: 'unverified'
    }
}, {
        timestamps: true
    });

function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

UserSchema.methods.verifyPassword = function (password) {
    let hashedPassword = bcrypt.hashSync(password, 10);

    return this.password === hashedPassword;
}

module.exports = mongoose.model('User', UserSchema);