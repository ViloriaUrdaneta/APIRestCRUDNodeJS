const router = require('express').Router();
const googleController = require('../../controllers/googleController')


router.get('/', googleController.getGoogleAPI);


module.exports = router;