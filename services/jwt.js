const jwt = require('jwt-simple');
const moment = require('moment');
require('dotenv').config({path: '../.env'});

// Clave secreta
const secret = `${process.env.SECRET}`;

// Crear function para generar token
const createToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix()
    }

    // Devolver jwt
    return jwt.encode(payload, secret);


}

module.exports = {createToken, secret}
