const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class Product extends Model {}

    Product.init({
        nombre:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        img:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        precio:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        descripcion:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, 
    {
        sequelize,
        modelName: "Product"
    })
    
    return Product
}