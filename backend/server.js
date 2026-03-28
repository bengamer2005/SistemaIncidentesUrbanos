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


// endpoints


// server
app.listen(env.PORT, env.PORT, () => {
    console.log(`Servidor corriendo en http://${env.IP}:${env.PORT}`)
})