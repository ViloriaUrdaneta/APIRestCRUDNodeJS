const router = require('express').Router();
const bookController = require('../../controllers/bookController')


router.get('/', bookController.getBook);

//router.get('/by/:userId', userController.getUserById);

router.post('/', bookController.postBook);

//router.put('/:userId', userController.putUser);

//router.delete('/:userId', userController.deleteUser);



module.exports = router;