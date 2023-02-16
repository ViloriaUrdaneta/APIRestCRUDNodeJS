const Author = require('../models/author.model');

async function addBookToAuthor(authorId, bookId) {

    const booksAuthor = await Author.findById(authorId);
    booksAuthor.books = booksAuthor.books.concat(bookId);
    await booksAuthor.save();

}

async function findAuthorByName(nameSearched) {

    const authorSearched = await Author.findOne({name: nameSearched});
    return authorSearched;

}

module.exports = { addBookToAuthor, findAuthorByName }