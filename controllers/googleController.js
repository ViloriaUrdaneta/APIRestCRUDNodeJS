const googleBooksAPI = require('../google/booksAPI');
const bookServices = require('../services/bookServices')
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

const postGoogleAPI = async (req, res, next) => {
    
    try {
        const id = req.params.id;
        const options = {
            key: googleKey,
            lang: "es"
        };
        googleBooksAPI(id, options)
        .then( async (results) => {
                const title = results.map((result) => result.title)[0];
                const author = results.map((result) => result.authors[0])[0];
                const newBook = await bookServices.createBook({title, author});
                res.json(newBook);
            })
        .catch((error) => {
            console.error(error);
            res.status(500).send("error googleBooksAPI in googleController");
        });    
    } catch (error) {
        res.status(500).send(error, 'error at getGoogleApi in googleController');
    }

}


module.exports = { getGoogleAPI, getGoogleAPIById, postGoogleAPI }

