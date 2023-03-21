const googleBooksAPI = require('../google/booksAPI');
const bookServices = require('../services/bookServices');
require("dotenv").config();

const googleKey = process.env.GOOGLE_API_KEY;


const searchGoogleAPI = async (req, res, next) => {
    
    try {
        const { term } = req.body;
        const options = {
            key: googleKey,
            field: "title",
            type: 'books',
            limit: 5,
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
    
    const googleId = req.params.id;
    const user = req.user.id;

    const existBook = await bookServices.findBookByGoogleIdAndUser(googleId, user);

    if(existBook){
        res.status(500).send("este libro ya existe en tu biblioteca")
        console.log('este libro ya existe en tu biblioteca: ', existBook)
    } else {
        try {
            const id = req.params.id;
            const user = req.user.id;
            const options = {
                key: googleKey,
                lang: "es"
            };
            googleBooksAPI(id, options)
                .then( async (results) => {
                        console.log(results)
                        const title = results.map((result) => result.title)[0];
                        const author = results.map((result) => result.authors[0])[0];
                        const authorName = results.map((result) => result.authors[0])[0];
                        let description;
                        if(results.map((result) => result.description)[0]){
                            description = results.map((result) => result.description)[0];
                        } else{
                            description = '';
                        }
                        let thumbnail;
                        if(results.map((result) => result.thumbnail)[0]){
                            thumbnail = results.map((result) => result.thumbnail)[0]
                        } else{
                            thumbnail = '';
                        }
                        console.log('pre')
                        const googleId = id;
                        const newBook = await bookServices.createBook({title, author, authorName, description, googleId, thumbnail, user});
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
}


module.exports = { searchGoogleAPI, getGoogleAPIById, postGoogleAPI }



/**
 * const postGoogleAPI = async (req, res, next) => {
    
    if(await bookServices.findBookByGoogleId(req.params.id)){
        res.status(500).send("este libro ya existe en tu biblioteca")
    } else {
        try {
            const id = req.params.id;
            const user = req.user.id;
            const options = {
                key: googleKey,
                lang: "es"
            };
            googleBooksAPI(id, options)
                .then( async (results) => {
                        console.log(results)
                        const title = results.map((result) => result.title)[0];
                        const author = results.map((result) => result.authors[0])[0];
                        const authorName = results.map((result) => result.authors[0])[0];
                        let description;
                        if(results.map((result) => result.description)[0]){
                            description = results.map((result) => result.description)[0];
                        } else{
                            description = '';
                        }
                        let thumbnail;
                        if(results.map((result) => result.thumbnail)[0]){
                            thumbnail = results.map((result) => result.thumbnail)[0]
                        } else{
                            thumbnail = '';
                        }
                        console.log('pre')
                        const googleId = id;
                        const newBook = await bookServices.createBook({title, author, authorName, description, googleId, thumbnail, user});
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
}
 */