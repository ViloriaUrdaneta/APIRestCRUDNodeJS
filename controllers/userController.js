const User = require('../models/user.model');
const userServices = require('../services/userServices')

const getUser = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    }catch (error) {
        res.status(500).json({ error: 'error at getUser in userController'});
    }
};

const getUserById = async (req, res, next) => {
    try {
        const users = await User.findById(
            req.params.userId,
        );
        res.json(users);
    }catch (error) {
        res.status(500).json({ error: 'error at getUserById in userController'});
    }
};

const postUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'error at postUser in userController'});
    }
};

const registerUser = async (req, res, next) => {
    try {
        const { name, mail, password } = req.body;
        const newUser = await userServices.registerUser({ name, mail, password })
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'error at registerUser in userController'});
    }
};

const putUser = async (req, res, next) => {
    try {
        const userEdit = await User.findByIdAndUpdate(
            req.params.userId,
            req.body,
            { new: true }
        );
        res.json(userEdit);
    } catch (error) {
        res.status(500).json({ error: 'error at putUser in userController'});
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(
            req.params.userId,
        );
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'error at deleteUser in userController'});
    }
};



module.exports = { getUser, getUserById, postUser, registerUser, putUser, deleteUser }