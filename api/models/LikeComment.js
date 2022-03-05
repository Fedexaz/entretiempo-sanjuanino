const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {

    class LikeComment extends Model {}

    LikeComment.init({
        idComentario:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        idUser:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'LikeComment'
    })

    return LikeComment
}