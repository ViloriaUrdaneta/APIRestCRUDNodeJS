const Author = require('../models/author.model')

const getAuthor = async (req, res, next) => {
    try {
        const books = await Author.find();
        res.json(books);
    }catch (error) {
        res.status(500).json({ error: 'error at getAuthor in authorController'});
    }
};

module.exports = { getAuthor }