const router = require('express').Router();
const bookController = require('../../controllers/bookController')
const protect = require('../../middlewares/authMiddleware')


router.get('/', bookController.getBook);

router.get('/byUser', protect, bookController.getBooksByUser);

router.get('/volumes', protect, bookController.getBookVolumes);

router.get('/by/:bookId', bookController.getBookById);

router.post('/', protect, bookController.postBook);

//router.put('/:userId', userController.putUser);

router.delete('/:bookId', bookController.deleteBook);



module.exports = router;