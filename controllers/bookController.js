const Book = require('../models/book.model');
const Author = require('../models/author.model');
const authorServices = require('../services/authorServices')

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
        const newAuthor = new Author;
        try {
            newAuthor.name = author;
            await newAuthor.save();
        } catch (error) {
            res.status(500).json({ error: 'error at newAuthr in bookController'});
        }
        const newBook =  new Book;
        const idAuthor = newAuthor._id;
        newBook.title = title;
        newBook.author = idAuthor;
        await newBook.save();
        const idBook = newBook._id
        authorServices.addBookToAuthor(idAuthor, idBook )

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