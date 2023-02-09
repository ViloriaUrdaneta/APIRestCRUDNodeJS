const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    page: { type: Number, required: true },
    title: { type: String },
    resume: { type: String, required: true },
    createdAt: { type: Date },
    book: { type: Object, ref: "Book", required: true }
    

});

module.exports = mongoose.model('Bookmark', bookmarkSchema);