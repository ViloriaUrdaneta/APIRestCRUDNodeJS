const Book = require('../models/book.model');
const bookServices = require('../services/bookServices')

const getBook = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books);
    }catch (error) {
        res.status(500).json({ error: 'error at getBook in bookController'});
    }
};

const postBook = async (req, res, next) => {
    try {
        const { title, author } = req.body
        const newBook = await bookServices.createBook({title, author})
        res.json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'error at postBook in bookController'});
    }
};

const deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(
            req.params.bookId,
        );
        res.json(book);
    } catch (error) {
        res.status(500).json({ book: 'error at deleteBook in bookController'});
    }
};

module.exports = { getBook, postBook, deleteBook }