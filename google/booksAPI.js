const GoogleBooks = require("google-books-search");

const searchBooks = (term, options) => {
    return new Promise((resolve, reject) => {
        GoogleBooks.search(term, options, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = searchBooks;