const { verifyJWT } = require('../utils/jwt')

const getTokenFromRequest = (request) => {
    const authorization = request.headers['authorization']
    const token = authorization ? authorization.substring(7) : null
    return token
}

const protect = (req, res, next) => {
    try {
        const token = getTokenFromRequest(req)
        console.log('token en middlewware: ', token)
        const user = verifyJWT(token)
        if (user.id) {
            req.user = user
            return next()
        } else{
            console.log('token no conseguido')
            res.status(401)
            throw new Error('Not authorized')
        }
    } catch (err) {
        console.log('error en isUserAuthenticated: ', err)
        res.status(401)
            throw new Error('Nor authorized')
    }
}

module.exports = protect