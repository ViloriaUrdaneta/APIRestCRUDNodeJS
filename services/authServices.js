const User = require('../models/user.model');
const { comparePassword } = require('../utils/hashPassword');
const { createJWT } = require('../utils/jwt')

async function login(email, password){
    try {
        const user = await User.findOne({ email: email })
        const isCorrectPassword = comparePassword(password, user.password)
        if(!isCorrectPassword){
            console.log('email or password not valid')
        } else{
            const token = createJWT({
                id: user._id,
                name: user.name,
                email: user.email,
            })
            return token
        }
    } catch(error){
        console.log('error en login, authServices: ', error)
    }
}

module.exports = { login }