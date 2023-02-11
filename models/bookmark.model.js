const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    page: { type: Number, required: true },
    title: { type: String },
    resume: { type: String, required: true },
    createdAt: { type: Date },
    book: { type: Schema.Types.ObjectId , ref: "Book", required: true },
    //user: { type: Schema.Types.ObjectId , ref: "User", required: true }
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);