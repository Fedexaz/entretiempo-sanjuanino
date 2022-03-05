const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {

    class LikeNew extends Model {}

    LikeNew.init({},
    {
        sequelize,
        modelName: 'LikeNew'
    })

    return LikeNew
}