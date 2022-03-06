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

const provincias = [
    "Elegir", 
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Rios",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquen",
    "Rio Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
]

module.exports = (sequelize) => {
    class User extends Model {}

    User.init({
        nombre:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        apellido:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true,
            checkEmail(value){
                if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig.test(value)){                 
                    throw new Error("Email no válido")
                }
                else return value
            }
        },
        password:{
            type: DataTypes.TEXT,
            allowNull:false
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
            defaultValue: '2000-10-10'
        },
        puntos:{
            type: DataTypes.BIGINT,
            defaultValue: 0
        },
        urlPerfil:{
            type: DataTypes.TEXT,
            defaultValue: "no-img"
        },
        rango:{
            type: DataTypes.ENUM(["USUARIO", "MODERADOR", "ADMINISTRADOR"]),
            allowNull: false,
            defaultValue: "USUARIO"
        }
    }, 
    {
        sequelize,
        modelName: "User"
    })

    return User
}