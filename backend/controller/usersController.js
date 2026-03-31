const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Users = require("../models/usersModel")

// register
const registerUser = async (req, res) => {
    try {
        const { name, last_name, email, password } = req.body

        if(!name || !last_name || !email || !password ) {
            return res.status(409).json({message: "Faltan campos por llenar"})
        }

        const findEmail = await Users.findOne({
            where: { email: email }
        })

        if(findEmail) {
            return res.status(401).json({message: "Email ya registrado, favor de iniciar sesion"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userInfo = await Users.create({
            name, 
            last_name, 
            email, 
            password: hashedPassword
        })

        res.status(200).json({message: "Usuario registrado exitosamente", user: userInfo})
    } catch (error) {
        console.error("Ocurrio un error en registerUser: ", error)
        res.status(500).json({ message: "Ocurrio un error al registrar al usuario" })
    }
}

// login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if(!email || !password) {
            return res.status(409).json({message: "Faltan campos por llenar"})
        }

        const user = await Users.findOne({
            where: { email: email }
        })

        if(!user) {
            return res.status(401).json({ message: "Credenciales invalidas" })
        }

        // const comparePassword = await bcrypt.compare(password, user.password)
        const comparePassword = password === user.password

        if(!comparePassword) {
            return res.status(401).json({message: "Credenciales invalidas"})
        }

        if(!process.env.JWT_SECRET){
            throw new Error("JWT_SECRET not defined")
        }

        const token = jwt.sign({
            id: user.users_id, 
            email: user.email,
            role: user.role_id
        }, process.env.JWT_SECRET, {
            expiresIn: "2h"
        })

        const { password: _, ...userData } = user.dataValues

        res.status(200).json({message: "Login exitoso: ", token, user: userData})
    } catch (error) {
        console.error("Ocurrio un error en loginUser:", error)
        res.status(500).json({message: "Ocurrio un error al iniciar sesion"})
    }
}

module.exports = {
    registerUser,
    loginUser
}