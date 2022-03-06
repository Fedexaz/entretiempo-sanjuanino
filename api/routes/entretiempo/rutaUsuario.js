const { User } = require("../../database");

const router = require("express").Router();

const bcrypt = require('bcrypt')

/*
=====================================================================================================
=   
=   RUTA DE USUARIOS (Aqui van todas las rutas para manejar el usuario y su CRUD)
=
=====================================================================================================
*/

/*

    RUTA REGISTER
        Aqui el usuario se registra en la base de datos

*/

router.post('/register', async (req, res) => {
    const { email, password, nombre, apellido } = req.body

    if(!email || !password || !nombre || !apellido) return res.status(400).send("Error al registrar usuario (algun campo falta)")

    try {
        const hash = await bcrypt.hash(password, 10)
        
        await User.create({
            nombre,
            apellido,
            email,
            password: hash
        })
        return res.send(201).send(`${nombre} ${apellido} agregado a la base de datos!`)
    } catch (error) {
        return res.status(500).send(error)
    }

})

router.post('/register', async (req, res) => {
    const { email, password, nombre, apellido } = req.body

    if(!email || !password || !nombre || !apellido) return res.status(400).send("Error al registrar usuario (algun campo falta)")

    try {
        const hash = await bcrypt.hash(password, 10)
        
        await User.create({
            nombre,
            apellido,
            email,
            password: hash
        })
        return res.send(201).send(`${nombre} ${apellido} agregado a la base de datos!`)
    } catch (error) {
        return res.status(500).send(error)
    }

})



module.exports = router