module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        Rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
};