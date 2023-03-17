const router = require('express').Router();
const googleController = require('../../controllers/googleController')
const protect = require('../../middlewares/authMiddleware')


router.post('/', googleController.searchGoogleAPI);

router.get('/by/:id', googleController.getGoogleAPIById);

router.post('/:id', protect, googleController.postGoogleAPI);


module.exports = router;