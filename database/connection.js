const mongoose = require("mongoose");

const connection = async() => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/virwochallenge`);
        console.log('Conexion exitosa a la BD!');
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar a base de datos");
    }
}


module.exports = connection;