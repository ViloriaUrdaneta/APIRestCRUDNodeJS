const GoogleBooks = require("google-books-search");




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