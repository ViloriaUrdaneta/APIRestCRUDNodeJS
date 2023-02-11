const router = require('express').Router();
const bookmarkController = require('../../controllers/bookmarkController')


router.get('/', bookmarkController.getBookmark);

router.get('/bybook/:bookId', bookmarkController.getBookmarkByBook);

router.post('/', bookmarkController.postBookmark);

//router.put('/:userId', userController.putUser);

router.delete('/:bookmarkId', bookmarkController.deleteBookmark);



module.exports = router;