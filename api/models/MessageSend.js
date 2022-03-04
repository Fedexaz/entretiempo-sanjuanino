const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class MessageSend extends Model {}

    MessageSend.init({
        mensaje:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        receptorID:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        chatID:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, 
    {
        sequelize,
        modelName: "MessageSend"
    })

    return MessageSend
}