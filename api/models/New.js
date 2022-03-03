const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class New extends Model {}

    New.init({
        titulo:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        contenido:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        creadorID:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        fechaPublicacion:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        horaPublicacion:{
            type: DataTypes.TIME,
            allowNull: false
        },
    }, 
    {
        sequelize,
        modelName: "New"
    })
}