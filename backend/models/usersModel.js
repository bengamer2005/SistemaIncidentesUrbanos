const { DataTypes } = require("sequelize")
const sequelize = require("../config/configDB")

const Users = sequelize.define("users", {
    users_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roles_id: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_by: {
        type: DataTypes.INTEGER
    },
    updated_at: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false
})

module.exports = Users