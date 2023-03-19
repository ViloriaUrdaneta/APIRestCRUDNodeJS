const router = require('express').Router();
const bookmarkController = require('../../controllers/bookmarkController')
const protect = require('../../middlewares/authMiddleware')


router.get('/', bookmarkController.getBookmark);

router.get('/bybook/:bookId', protect, bookmarkController.getBookmarkByBook);

router.get('/byUSer', protect, bookmarkController.getBookmarkByUser);

router.post('/', protect, bookmarkController.postBookmark);

//router.put('/:userId', userController.putUser);

router.delete('/:bookmarkId', bookmarkController.deleteBookmark);



module.exports = router;