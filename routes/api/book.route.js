const router = require('express').Router();
const bookController = require('../../controllers/bookController')


router.get('/', bookController.getBook);

router.get('/volumes', bookController.getBookVolumes);

router.get('/by/:bookId', bookController.getBookById);

router.post('/', bookController.postBook);

//router.put('/:userId', userController.putUser);

router.delete('/:bookId', bookController.deleteBook);



module.exports = router;