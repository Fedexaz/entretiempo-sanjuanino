const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class ApiKey extends Model {}

    ApiKey.init({
        key:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        activa:{
            type: DataTypes.BOOLEAN,
            allowNul: false,
            defaultValue: true
        },
        compradorID:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        fechaCompra:{
            type: DataTypes.DATEONLY,
        },
        fechaRenovacion:{
            type: DataTypes.DATEONLY,
        }
    },
    {
        sequelize,
        createdAt: 'obtenida',
        updatedAt: 'renovada',
        modelName: "ApiKey"
    })

    return ApiKey;
}