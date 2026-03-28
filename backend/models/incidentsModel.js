const { DataTypes } = require("sequelize")
const sequelize = require("../config/configDB")

const Incidents = sequelize.define("incidents", {
    incidents_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    catalog_incidents_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status_incidents_id: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    lat: {
        type: DataTypes.DECIMAL(10, 7),
        allowNull: false
    },
    lot: {
        type: DataTypes.DECIMAL(10, 7),
        allowNull: false
    },
    created_by: {
        type: DataTypes.INTEGER,
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

module.exports = Incidents