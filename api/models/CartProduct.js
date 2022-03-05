const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class CartProduct extends Model {}

    CartProduct.init({
        idProducto:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, 
    {
        sequelize,
        modelName: "CartProduct"
    })
    
    return CartProduct
}