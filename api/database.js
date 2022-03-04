require('dotenv').config()

const { Sequelize } = require('sequelize')

const User = require('./models/User');
const Team = require('./models/Team');
const Pronostic = require('./models/Pronostic');
const Product = require('./models/Product');
const Player = require('./models/Player');
const NewImg = require('./models/NewImg');
const New = require('./models/New');
const MessageSend = require('./models/MessageSend');
const MessageReceived = require('./models/MessageReceived');
const Chat = require('./models/Chat');
const Match = require('./models/Match');
const Like = require('./models/Like');
const Comment = require('./models/Comment');
const Cart = require('./models/Cart');

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

//Inicializacion de los modelos (pasandole la instancia de sequelize)

User(sequelize)
Team(sequelize)
Pronostic(sequelize)
Product(sequelize)
Player(sequelize)
NewImg(sequelize)
New(sequelize)
MessageSend(sequelize)
MessageReceived(sequelize)
Chat(sequelize)
Match(sequelize)
Like(sequelize)
Comment(sequelize)
Cart(sequelize)

// Relaciones

/* Country.belongsToMany(Activity, { through: 'countryActivity'})
Activity.belongsToMany(Country, { through: 'countryActivity'}) */

module.exports = {
  conexion: sequelize,     // para importart la conexión { conn } = require('./db.js');
};