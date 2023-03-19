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

const getBooksByUser = async (req, res, next) => {
    try {
        const bookVolumesByUser = await bookServices.findBookVolumesByUser(req.user.id);
        //const books = await Book.find({ user: req.user.id });
        res.json(bookVolumesByUser);
    }catch (error) {
        res.status(500).json({ error: 'error at getBooksByUser in bookController'});
    }
};

const getBookVolumes = async (req, res, next) => {
    try {
        const bookVolumes = await bookServices.findBookVolumes();
        res.json(bookVolumes);
    }catch (error) {
        res.status(500).json({ error: 'error at getBookVolumes in bookController'});
        console.log(error)
    }
};

const getBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.bookId);
        res.json(book);
    }catch (error) {
        res.status(500).json({ error: 'error at getBook in bookController'});
    }
};

const postBook = async (req, res, next) => {
    try {
        const { title, author } = req.body;
        const user = req.user.id
        const newBook = await bookServices.createBook({title, author, user});
        res.json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'error at postBook in bookController'});
        console.log(error)
    }
};

const deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(
            req.params.bookId
        );
        res.json(book);
    } catch (error) {
        res.status(500).json({ book: 'error at deleteBook in bookController'});
    }
};

module.exports = { getBook, getBooksByUser, postBook, deleteBook, getBookVolumes, getBookById }