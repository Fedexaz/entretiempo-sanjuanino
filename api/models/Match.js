const { Model, DataTypes } = require('sequelize')

const lugar = [
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

const evento = [//El evento seria la copa, el torneo, amistoso, etc
    "Elegir",
    ""
]

const cancha = [
    "Elegir",
    ""
]

module.exports = (sequelize) => {
    class Match extends Model {}

    Match.init({
        fecha:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        hora:{
            type: DataTypes.TIME,
            allowNull: false,
        },
        lugar:{
            type: DataTypes.ENUM(lugar),
            allowNull: false,
            defaultValue: lugar[0]
        },
        cancha:{
            type: DataTypes.ENUM(cancha),
            allowNull: false,
            defaultValue: cancha[0]
        },
        evento:{
            type: DataTypes.ENUM(evento),
            allowNull: false,
            defaultValue: evento[0]
        },
    }, 
    {
        sequelize,
        modelName: "Match"
    })
}