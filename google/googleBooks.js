const GoogleBooks = require("google-books-search");

const API_KEY = 'AIzaSyBtWBib941kKY-oP5OAsQ1pLdB6RLdS0l8'


var options = {
    limit: 1,
    type: "books",
    order: "relevance",
    lang: "es",
    //key: API_KEY
};


module.exports = function(query, callback) {
    options.q = query;
    GoogleBooks.search(options, callback);
};