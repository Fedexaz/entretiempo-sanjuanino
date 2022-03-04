const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class MessageReceived extends Model {}

    MessageReceived.init({
        mensaje:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        emisorID:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        chatID:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: "MessageReceived"
    })

    return MessageReceived
}