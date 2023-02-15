const router = require('express').Router();
const googleController = require('../../controllers/googleController')


router.get('/', googleController.getGoogleAPI);

router.get('/by/:id', googleController.getGoogleAPIById);


module.exports = router;