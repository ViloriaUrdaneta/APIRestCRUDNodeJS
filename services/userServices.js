const User = require('../models/user.model')
const bcrypt = require('bcrypt')

async function registerUser(newUserData){

    try {
        const userExist = await User.findOne({ mail: newUserData.mail })
        if(!userExist){
            const password = newUserData.password;
            const newUser = new User;
            bcrypt.hash(password, 10, async (err, hashedPassword) => {
                if(err){
                    console.log('error en bcrypt: ',err)
                } else{
                    console.log(hashedPassword)
                    newUser.name = newUserData.name;
                    newUser.mail = newUserData.mail;
                    newUser.password = hashedPassword;
                    await newUser.save();
                }  
            })
            console.log('usuario guardado')
            console.log(newUser)
            return newUser;   
        } else{
            console.log('usuario ya existente')
        }
    } catch(error){
        console.log('error en registerUser, userServices: ', error)
    }
    /*
    try{
        console.log(newUserData)
        const userExist = await User.findOne({ mail: newUserData.mail })
        console.log(userExist)
        if (!userExist) {
            let password = newUserData.password;
            bcrypt.hash(password, 10, async (err, hashedPassword) => {
                if(err){
                    console.log('error en bcryot: ',err)
                } else{
                    console.log(hashedPassword)
                    const newUser = new User({
                        name: newUserData.name,
                        mail: newUserData.mail,
                        password: hashedPassword
                    })
                    await newUser.save();
                    console.log('usuario guardado')
                }  
            })
        } else{
            console.log('usuario existente')
        }
        
    } catch(error){
        console.log('error en registerUser, userServices: ', error)
    }
    console.log(newUser)
    return newUser;
    */
}

module.exports = { registerUser }