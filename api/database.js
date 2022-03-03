require('dotenv').config()

const fs = require('fs');
const path = require('path');

const { Sequelize } = require('sequelize')

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

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { 
    User, 
    Team, 
    Pronostic, 
    Product, 
    Player, 
    NewImg, 
    New, 
    MessageSend, 
    MessageReceived, 
    Match, 
    LikeNew, 
    LikeComment, 
    Comment, 
    Cart
} = sequelize.models;

// Relaciones

/* Country.belongsToMany(Activity, { through: 'countryActivity'})
Activity.belongsToMany(Country, { through: 'countryActivity'}) */

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conexion: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
