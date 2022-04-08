const { connect } = require('mongoose');

const connectToDB = async () => {
    try {
        const conn = await connect('mongodb://127.0.0.1:27017/Entretiempo');
        console.log(`Conexión exitosa a ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in MongoDB (${error})`);
        process.exit(1);
    }
}

module.exports = connectToDB;