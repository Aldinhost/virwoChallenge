const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../services/jwt');

// Acciones de prueba

const pruebaUser = (req, res) => {
    return res.status(200).send({
        msg: "Mensaje enviado desde userController",
        usuario: req.user
    })
}

// Register
const register = async (req, res) => {

    // Recoger datos de la peticion
    let params = req.body;
    // Comprobar que llengan los datos
    if(!params.name || !params.email || !params.password){
        return res.status(400).send({
            status: 'Error',
            msg: 'Hay campos vacíos'
        });
    }

    // Crear objeto user
    const userStore = new User(params);

    //Controlde usuarios duplicados
    try {
        const userExists = await User.find({ email: userStore.email.toLowerCase() }).exec();
        if(userExists.length >=1){
            return res.status(200).send({
                status:'success',
                msg: 'El usuario ya existe'
            })
        }

        // Almacenar en DB
        const userStored = await userStore.save();

        if(!userStored){
            return res.status(500).send({
                status: 'Error',
                msg: 'Erro al guardar usuario'
            });
        }
            

        // Devolver datos
        return res.status(200).json({
            status: 'Success',
            msg: 'Usuario registrado correctamente.',
            user: userStored
        });

    } catch (error) {
        return res.status(500).json({
            status: 'Error',
            msg: 'Error en consulta de usuarios'
        });
    }

}




// Login
const login = async (req, res) => {

    // Recoger parametros de body
    let params = req.body;

    if(!params.email || !params.password){
        return res.status(400).send({
            status: 'Error',
            msg: 'Falta usuario o contraseña'
        });
    }

    // Buscar usuario en la base de datos
    const userExists = await User.findOne({email: params.email.toLowerCase()});
    if(!userExists){
        return res.status(404).send({
            status: 'Error',
            msg: 'El usuario no existe'
        });
    }

    // comprobar su contraseña
    const pass = bcrypt.compareSync(params.password, userExists.password);
    if(!pass){
        return res.status(400).send({
            status: 'Error',
            msg: 'No te has identificado correctamente'
        });
    }

    // Devolver Token

    const token = jwt.createToken(userExists);

    // Devolver los datos de usuario

    return res.status(200).send({
        status: 'success',
        msg: 'Te has identificado correctamente',
        userExists: {
            id: userExists._id,
            name: userExists.name,
            email: userExists.email
        },
        token
    });
}




const home = async (req, res) => {
    //recibir el parametro de id de usuario que llegara por la url
    const id = req.params.id;
    // Consulta para obtener datos de usuario
    const userData = await User.findById(id).select({password: 0}).exec();

    //Devolver datos de uausrio

    try {
        if(id){
          // Devolver Resultado
          return res.status(200).send({
            status: 'success',
            userData: {
                id: userData._id,
                name: userData.name,    
                email: userData.email
            }
          });
        }
    } catch (error) {
        return res.status(404).send({
            status: 'error',
            msg: 'Error en consulta'
        });
    }
}

module.exports = {
    pruebaUser,
    register,
    login,
    home
}