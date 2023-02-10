const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }]
});

module.exports = mongoose.model('User', authorSchema); 