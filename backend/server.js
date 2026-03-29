const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const env = {
    PORT: Number(process.env.PORT ?? 3007),
    IP: process.env.IP ?? "localhost",
    FRONTEND: process.env.FRONTEND ?? "http://localhost:5173"
}

const app = express()

// middleware
app.use(express.json())

app.use(cors({
    origin: env.FRONTEND
}))

// connect DB
const DB = require("./config/configDB")

const connectDB = async () => {
    try {
        await DB.authenticate()
        console.log("Conexion a la base de datos establecida correctamente")
    } catch (error) {
        console.error("No se pudo conectar a la base de datos:", error)
    }
}

connectDB()

// endpoints
const incidentsRoute = require("./routes/incidentsRoutes")
app.use("/incidentes-urbanos", incidentsRoute)

// server
app.listen(env.PORT, env.PORT, () => {
    console.log(`Servidor corriendo en http://${env.IP}:${env.PORT}`)
})