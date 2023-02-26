const router = require('express').Router();
const googleController = require('../../controllers/googleController')


router.post('/', googleController.searchGoogleAPI);

router.get('/by/:id', googleController.getGoogleAPIById);

router.post('/:id', googleController.postGoogleAPI);


module.exports = router;