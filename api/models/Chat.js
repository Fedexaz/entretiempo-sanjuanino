const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class Chat extends Model {}

    Chat.init({
        user_1:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        user_2:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
    }, 
    {
        sequelize,
        modelName: "Chat"
    })
}