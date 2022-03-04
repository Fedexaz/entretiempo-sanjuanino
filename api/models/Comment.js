const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class Comment extends Model {}

    Comment.init({
        comentario:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        fecha:{
            type: DataTypes.DATEONLY,
            defaultValue: 1910
        },
        hora:{
            type: DataTypes.TIME,
            allowNull: false
        },
    }, 
    {
        sequelize,
        modelName: "Comment"
    })
}