const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class Cart extends Model {}

    Cart.init({
        
    }, 
    {
        sequelize,
        modelName: "Cart"
    })
}