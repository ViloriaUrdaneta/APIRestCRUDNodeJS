const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    year: { type: String },
    bookmarks: [{ type: Object, ref: "Bookmark" }]
});

module.exports = mongoose.model('book', bookSchema);