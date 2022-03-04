const { Model, DataTypes } = require('sequelize')

const departamentos = [
    "Elegir", 
    "25 de Mayo", 
    "Albardón", 
    "Pocito", 
    "San Martín", 
    "Chimbas", 
    "Capital", 
    "9 de Julio", 
    "Caucete", 
    "Jáchal", 
    "Rivadavia", 
    "Zonda", 
    "Rawson", 
    "Media agua", 
    "Ullum",
    "Sarmiento",
    "Santa Lucía",
    "Calingasta",
    "Angaco",
    "Iglesia"
]

module.exports = (sequelize) => {
    class Player extends Model {}

    Player.init({
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        equipoID:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        departamento:{
            type: DataTypes.ENUM(departamentos),
            allowNull: false,
            defaultValue: departamentos[0]
        },
        altura:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        peso:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        posicion:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        foto:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        informacion:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, 
    {
        sequelize,
        modelName: "Player"
    })

    return Player
}