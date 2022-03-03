require('dotenv').config()

const fs = require('fs');
const path = require('path');

const { Sequelize } = require('sequelize')

const User = require('./models/User');

const { USER_DB, PASSWORD_DB, HOST_DB, NAME_DB } = process.env;
  
let sequelize =
    process.env.NODE_ENV === "production"
    ? 
        new Sequelize({
            database: NAME_DB,
            dialect: "postgres",
            host: HOST_DB,
            port: 5432,
            username: USER_DB,
            password: PASSWORD_DB,
            pool: {
                max: 3,
                min: 1,
                idle: 10000,
            },
            dialectOptions: {
                ssl: {
                require: true,
                rejectUnauthorized: false,
                },
                keepAlive: true,
            },
            ssl: true,
        })
    : 
    new Sequelize(`postgres://${USER_DB}:${PASSWORD_DB}@${HOST_DB}/${NAME_DB}`,{ 
        logging: false, 
        native: false 
    }
);

User(sequelize)
// Relaciones

/* Country.belongsToMany(Activity, { through: 'countryActivity'})
Activity.belongsToMany(Country, { through: 'countryActivity'}) */

module.exports = {
  conexion: sequelize,     // para importart la conexión { conn } = require('./db.js');
};