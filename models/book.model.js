const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    googleId: { type: String },
    description: { type: String },
    year: { type: String },
    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Bookmark" }]
});

module.exports = mongoose.model('book', bookSchema);