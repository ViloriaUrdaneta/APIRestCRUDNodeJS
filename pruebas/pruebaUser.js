const mongoose =require('mongoose');
const User = require('../models/user');

(async () => {
    await mongoose.connect('mongodb://localhost:27017/users');

    const newUser = await User.create({
        name: 'John',
        email: 'john@email.com',
        password: '1234567'
    });

    console.log(newUser);
})();