const { DataTypes } = require("sequelize")
const sequelize = require("../config/configDB")

const Roles = sequelize.define("roles", {
    roles_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Roles