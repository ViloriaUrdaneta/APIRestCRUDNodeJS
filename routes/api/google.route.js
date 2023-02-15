const router = require('express').Router();
const googleController = require('../../controllers/googleController')


router.get('/', googleController.getGoogleAPI);

router.get('/by/:id', googleController.getGoogleAPIById);

router.post('/:id', googleController.postGoogleAPI);


module.exports = router;