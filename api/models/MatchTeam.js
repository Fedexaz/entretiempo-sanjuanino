const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class MatchTeam extends Model {}

    MatchTeam.init({
        idLocal:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        idVisitante:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        golesLocal:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        golesVisitante:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
    }, 
    {
        sequelize,
        modelName: "MatchTeam"
    })

    return MatchTeam
}