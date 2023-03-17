const authServices = require('../services/authServices')

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const token = await authServices.login(email, password)
        res.json(token);
    }catch (error) {
        res.status(500).json({ error: 'error at login in authController'});
    }
};

module.exports = { login }