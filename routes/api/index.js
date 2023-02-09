//Rutas de la API
const router = require('express').Router();

router.use('/users', require('./user.route'));
router.use('/books', require('./book.route'));


module.exports = router;