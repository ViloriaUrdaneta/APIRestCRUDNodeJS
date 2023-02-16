const Author = require('../models/author.model');
const Book = require('../models/book.model');
const authorServices = require('../services/authorServices')


async function createBook(newBookData) {
    try {
        if (!await authorServices.findAuthorByName(newBookData.author)){

            const newAuthor = new Author;
            try {
                newAuthor.name = newBookData.author;
                await newAuthor.save();
            } catch (error) {
                console.log(error, 'error en newAuthor, bookServices')
            }
            const newBook =  new Book;
            const idAuthor = newAuthor._id;
            newBook.title = newBookData.title;
            newBook.author = idAuthor;
            newBook.googleId = newBookData.googleId;
            await newBook.save();
            const idBook = newBook._id
            authorServices.addBookToAuthor(idAuthor, idBook )

            return newBook
        } else {
            const newBook =  new Book;
            const idAuthor = await  authorServices.findAuthorByName(newBookData.author);
            newBook.title = newBookData.title;
            newBook.author = idAuthor;
            newBook.googleId = newBookData.googleId;
            await newBook.save();
            const idBook = newBook._id
            authorServices.addBookToAuthor(idAuthor, idBook )
            
            return newBook
        }
    } catch (error) {
        console.log(error, 'error en createBook, bookServices')
    }
}


async function addBookmarkToBook(bookId, bookmarkId) {

    const book = await Book.findById(bookId);
    book.bookmarks = book.bookmarks.concat(bookmarkId);
    await book.save();

}

async function findBookByGoogleId(googleIdSearched) {

    const bookSearched = await Book.findOne({googleId : googleIdSearched});
    return bookSearched;

}



module.exports = { createBook, addBookmarkToBook, findBookByGoogleId }
