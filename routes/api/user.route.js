const router = require('express').Router();
const userController = require('../../controllers/userController')


router.get('/', userController.getUser);

router.get('/by/:userId', userController.getUserById);

router.post('/', userController.postUser);

router.put('/:userId', userController.putUser);

router.delete('/:userId', userController.deleteUser);



module.exports = router;