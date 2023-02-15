const googleBooksAPI = require('../google/booksAPI');
require("dotenv").config();

const googleKey = process.env.GOOGLE_API_KEY;


const getGoogleAPI = async (req, res, next) => {
    
    try {
        const { term, entries } = req.body;
        const options = {
            key: googleKey,
            field: "title",
            type: 'books',
            limit: entries,
            order: 'relevance',
            lang: "es"
        };
        googleBooksAPI(term, options)
        .then((results) => {
                res.json(results);
            })
        .catch((error) => {
            console.error(error);
            res.status(500).send("error googleBooksAPI in googleController");
        });    
    } catch (error) {
        res.status(500).send(error, 'error at getGoogleApi in googleController');
    }

}

const getGoogleAPIById = async (req, res, next) => {
    
    try {
        const id = req.params.id;
        const options = {
            key: googleKey,
            lang: "es"
        };
        googleBooksAPI(id, options)
        .then((results) => {
                res.json(results);
            })
        .catch((error) => {
            console.error(error);
            res.status(500).send("error googleBooksAPI in googleController");
        });    
    } catch (error) {
        res.status(500).send(error, 'error at getGoogleApi in googleController');
    }

}


module.exports = { getGoogleAPI, getGoogleAPIById }

