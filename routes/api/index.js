//Rutas de la API
const router = require('express').Router();

router.use('/users', require('./user.route'));
router.use('/books', require('./book.route'));
router.use('/authors', require('./author.route'));
router.use('/bookmarks', require('./bookmark.route'));


module.exports = router;