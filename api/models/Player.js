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
    class Team extends Model {}

    Team.init({
        nombre:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        urlEscudo:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        pagina:{
            type: DataTypes.TEXT,
            defaultValue: 'http://www.entretiemposj.com.ar/'
        },
        fechaCreacion:{
            type: DataTypes.DATEONLY,
            defaultValue: 1910
        },
        siglas:{
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        departamento:{
            type: DataTypes.ENUM(departamentos),
            allowNull: false,
            defaultValue: departamentos[0]
        },
    }, 
    {
        sequelize,
        modelName: "Team"
    })
}