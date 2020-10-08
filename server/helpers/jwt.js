const jwt = require("jsonwebtoken")

function signToken(payload) {
    return jwt.sign(payload, process.env.SECRET)

}

function decodeToken(access_token) {
    return jwt.verify(access_token, process.env.SECRET)

}


module.exports = {
    signToken,
    decodeToken
}