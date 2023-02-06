const authRouter = require('express').Router();
const authController = require('../../controllers/authController');


authRouter.post('/register', authController.registerUser);

module.exports = authRouter;