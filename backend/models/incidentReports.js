const { DataTypes } = require("sequelize")
const sequelize = require("../config/configDB")

const IncidentReports = sequelize.define("incident_reports", {
    incident_report_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    incidents_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false
})

module.exports = IncidentReports