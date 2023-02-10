const Author = require('../models/author.model');
const Book = require('../models/book.model');

async function addBookToAuthor(authorId, bookId) {



    const booksAuthor = await Author.findById(authorId);
    console.log(booksAuthor);
    
    booksAuthor.books = booksAuthor.books.concat(bookId);

    await booksAuthor.save();


}

module.exports = { addBookToAuthor }