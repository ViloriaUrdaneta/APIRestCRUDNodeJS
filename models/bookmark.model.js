const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    page: { type: Number, required: true },
    title: { type: String },
    resume: { type: String, required: true },
    createdAt: { type: Date },
    book: { type: Schema.Types.ObjectId , ref: "Book", required: true },
    bookName : { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);