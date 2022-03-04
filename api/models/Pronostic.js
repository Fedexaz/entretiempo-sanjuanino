const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class Pronostic extends Model {}

    Pronostic.init({
        idUsuario:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        pronosticadoID:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        partidoID:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        goles:{
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    },
    {
        sequelize,
        modelName: "Pronostic"
    })

    return Pronostic
}