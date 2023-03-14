const Bookmark = require('../models/bookmark.model');
const bookServices = require('../services/bookServices');
const Book = require('../models/book.model')


async function createBookmark(newBookmarkData) {
    try {

        const newBookmark =  new Bookmark;
        newBookmark.page = newBookmarkData.page;
        newBookmark.resume = newBookmarkData.resume;
        newBookmark.book = newBookmarkData.book;
        const book = await Book.findById(newBookmarkData.book);
        newBookmark.bookName = book.title;
        await newBookmark.save();
        console.log(newBookmark);

        const bookmarkId = newBookmark._id; 
        const bookId = newBookmark.book;

        bookServices.addBookmarkToBook(bookId, bookmarkId)

        return newBookmark
    } catch (error) {
        console.log(error, 'error en createBookmark, bookmarkServices')
    }
}

async function findBookmarksByBook(bookId) {
    try {

        const book = await Book.findById(bookId);
        const bookmarksIdByBookList = [ ...book.bookmarks ];
        const bookmarksByBookList = await Bookmark.find({ '_id': { $in: bookmarksIdByBookList}});
        
        return bookmarksByBookList;
    } catch (error) {
        console.log(error, 'error en findBookmarksByBook, bookmarkServices')
    }
}



module.exports = { createBookmark, findBookmarksByBook }
