//Rutas de la API
const router = require('express').Router();

router.use('/users', require('./user.route'));
router.use('/auth', require ('./auth.route.js'));

module.exports = router;