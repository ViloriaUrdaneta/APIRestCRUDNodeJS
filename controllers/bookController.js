const Book = require('../models/book.model');

const getBook = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books);
    }catch (error) {
        res.status(500).json({ error: 'error at getUser in userController'});
    }
};

const postBook = async (req, res, next) => {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'error at postUser in userController'});
    }
};

module.exports = { getBook, postBook }