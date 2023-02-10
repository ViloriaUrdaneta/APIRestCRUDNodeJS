const router = require('express').Router();
const authorController = require('../../controllers/authorController')


router.get('/', authorController.getAuthor);

//router.get('/by/:userId', userController.getUserById);

//router.post('/', bookController.postBook);

//router.put('/:userId', userController.putUser);

//router.delete('/:bookId', bookController.deleteBook);



module.exports = router;