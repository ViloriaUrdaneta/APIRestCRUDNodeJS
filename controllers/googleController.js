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


/*




    app.post('/search', async (req, res) => {
  const q = req.body.q;
  const books = await googleBooks.search(q);
  res.send(books);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
};

*/

module.exports = { getGoogleAPI }

