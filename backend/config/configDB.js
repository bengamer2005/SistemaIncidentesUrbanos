const sequelize = require("sequelize")

const connectionStr = process.env.DATABASE_URL || "localhost"

const DB = new sequelize.Sequelize(connectionStr, {
    dialect: "postgres",
    dialectOptions: {
        sel: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

module.exports = DB