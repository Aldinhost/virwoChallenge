// importar modulos
const jwt = require('jwt-simple');
const moment = require('moment');

//importar secret
const cve = require('../services/jwt');
const secret = cve.secret;
//funcion de autenticacion
exports.auth = (req, res, next)=>{

    // Comprobar que llegan headers de auth
    if(!req.headers. authorization){
        return res.status(403).send({
            status: 'Error',
            msg: 'Falta informacion de autenticación'
        });
    }
    
    // Decodificar token
    let token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        let payload = jwt.decode(token, secret);

        //Exp Token
        if(payload.exp <= moment().unix()){
            return res.status(401).send({
                status: 'Error',
                msg: 'El token ha expirado'
            });
        }

        // Agregar datos de usuario a request
        req.user = payload;

    } catch (error) {
        return res.status(404).send({
            status: 'Error',
            msg: 'Token inválido'
        });
    }

    // Pasar a ejecucion de ruta
    next();
}