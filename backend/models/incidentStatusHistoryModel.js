const { DataTypes } = require("sequelize")
const sequelize = require("../config/configDB")

const IncidentStatusHistory = sequelize.define("incident_status_history", {
    history_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    incidents_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    old_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    new_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    changed_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    changed_at: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false
})

module.exports = IncidentStatusHistory