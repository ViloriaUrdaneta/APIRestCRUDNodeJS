const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true, minlength: 7 }
});

module.exports = mongoose.model('User', userSchema);