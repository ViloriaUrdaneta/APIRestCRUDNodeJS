const googleBooks = require('../google/booksAPI');


const getGoogleAPI = async (req, res, next) => {
    
    try {
        const q = req.body.q;
        const books = await googleBooks.search(q);
        res.send(books);
    }catch (error) {
        res.status(500).json({ error: 'error at getGoogleApi in googleController'});
    }
}


module.exports = { getGoogleAPI }

