const { DataTypes } = require("sequelize")
const sequelize = require("../config/configDB")

const CatalogIncidents = sequelize.define("catalog_incidents", {
    catalog_incidents_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
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

module.exports = CatalogIncidents