const { Model, DataTypes } = require('sequelize')
const conexion = require('../database')

class User extends Model {}

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

const provincias = [
    "Elegir", 
    ""
]

module.exports = User.init({
        nombre:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        apellido:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(128),
            allowNull: false,
            checkEmail(value){
                if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig.test(value)){                 
                    throw new Error("Email no válido")
                }
                else return value
            }
        },
        dni:{
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 11111111
        },
        direccion:{
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'ingresa una dirección'
        },
        departamento:{
            type: DataTypes.ENUM(departamentos),
            allowNull: false,
            defaultValue: departamentos[0]
        },
        provincia:{
            type: DataTypes.ENUM(provincias),
            allowNull: false,
            defaultValue: provincias[0]
        },
        fechaNac:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        puntos:{
            type: DataTypes.BIGINT(20),
            defaultValue: 0
        },
        urlPerfil:{
            type: DataTypes.TEXT,
            defaultValue: "no-img"
        }
    }, 
    {
        conexion,
        modelName: "User"
    }
)