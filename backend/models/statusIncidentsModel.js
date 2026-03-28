const { DataTypes } = require("sequelize")
const sequelize = require("../config/configDB")

const StatusIncidents = sequelize.define("status_incidents", {
    status_incidents_id: {
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

module.exports = StatusIncidents