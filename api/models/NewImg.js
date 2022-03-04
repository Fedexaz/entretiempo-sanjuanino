const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class NewImg extends Model {}

    NewImg.init({
        urlImg:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        noticiaID:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, 
    {
        sequelize,
        modelName: "NewImg"
    })

    return NewImg
}