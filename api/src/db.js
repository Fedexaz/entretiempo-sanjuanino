const { connect } = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToDB = async () => {
    try {
        const conn = await connect(`mongodb+srv://FedexaZ:${process.env.MONGO_PASS}@entretiempo.sno65.mongodb.net/Entretiempo`);
        console.log(`Conexión exitosa a ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in MongoDB (${error})`);
        process.exit(1);
    }
}

module.exports = connectToDB;