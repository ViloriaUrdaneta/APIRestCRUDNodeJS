const googleBooks = require('../google/booksAPI');
const googleBooksAPI = require('../google/googleBooks');
require("dotenv").config();



const getGoogleAPI = async (req, res, next) => {
    

    try {
        const term = req.body.q;
        const options = {
            key: process.env.GOOGLE_API_KEY,
            field: "title",
            type: 'books',
            limit: 1,
            order: 'relevance',
            lang: "es"
        };
        googleBooksAPI(term, options)
        .then((results) => {
                res.json(results);
            })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error searching books");
        });    
    } catch (error) {
        res.status(500).send(error);
    }


    /*
    try {
        const q = req.body.q;
        const books = await googleBooks.search(q);
        res.send(books);
    }catch (error) {
        res.status(500).json({ error: 'error at getGoogleApi in googleController'});
    }
    */
}


module.exports = { getGoogleAPI }

