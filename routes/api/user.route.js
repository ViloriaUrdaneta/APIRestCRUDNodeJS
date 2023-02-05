const router = require('express').Router();

const User = require('../../models/user.model')

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }catch (error) {
        res.status(500).json({ error: 'error en user.route'});
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'error en user.route'});
    }

})

router.put('/:userId', async (req, res) => {
    try {
        const userEdit = await User.findByIdAndUpdate(
            req.params.userId,
            req.body,
            { new: true }
        );
        res.json(userEdit);
    } catch (error) {
        res.status(500).json({ error: 'error en user.route'});
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(
            req.params.userId,
        );
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'error en user.route'});
    }
});

module.exports = router;