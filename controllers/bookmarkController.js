const Bookmark = require('../models/bookmark.model');
const bookmarkServices = require('../services/bookmarkServices')

const getBookmark = async (req, res, next) => {
    try {
        const bookmarks = await Bookmark.find();
        res.json(bookmarks);
    }catch (error) {
        res.status(500).json({ error: 'error at getBookmark in bookmarkController'});
    }
};

const getBookmarkByBook = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;
        const bookmarksByBookId = await bookmarkServices.findBookmarksByBook(bookId);
        res.json(bookmarksByBookId);
    } catch (error) {
        res.status(500).json({ bookmark: 'error at getBookmarkByBook in bookmarkController'});
    }
};

const postBookmark = async (req, res, next) => {
    try {
        const { page, resume, book } = req.body;
        const newBookmark = await bookmarkServices.createBookmark({page, resume, book});
        res.json(newBookmark);
    } catch (error) {
        res.status(500).json({ error: 'error at postBookmark in bookmarkController'});
    }
};

const deleteBookmark = async (req, res, next) => {
    try {
        const bookmark = await Bookmark.findByIdAndDelete(
            req.params.bookmarkId
        );
        res.json(bookmark);
    } catch (error) {
        res.status(500).json({ bookmark: 'error at deleteBookmark in bookmarkController'});
    }
};

module.exports = { getBookmark, postBookmark, deleteBookmark, getBookmarkByBook }