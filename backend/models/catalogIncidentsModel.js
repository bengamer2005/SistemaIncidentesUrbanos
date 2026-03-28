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
    }
}, {
    timestamps: false
})

module.exports = CatalogIncidents