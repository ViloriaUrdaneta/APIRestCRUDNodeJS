const User = require('../models/user.model')
const { hashPassword } = require('../utils/hashPassword')

async function registerUser(newUserData){
    try {
        const userExist = await User.findOne({ email: newUserData.email })
        const newUser = new User;
        if(userExist){
            console.log('usuario ya existente')
        } else{
            const hashedPassword = hashPassword(newUserData.password)
            newUser.name = newUserData.name;
            newUser.email = newUserData.email;
            newUser.password = hashedPassword;
            await newUser.save();
            return newUser;
        }
    } catch(error){
        console.log('error en registerUser, userServices: ', error)
    }
}

module.exports = { registerUser }