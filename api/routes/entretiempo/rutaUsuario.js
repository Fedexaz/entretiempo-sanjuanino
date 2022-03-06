require('dotenv').config()

const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt')

const { User } = require("../../database");

const router = require("express").Router();

const passport = require('passport')

//CONFIGURACION PARA NODEMAILER

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


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

const salt = bcrypt.genSaltSync();

router.post('/register', async (req, res) => {
    const { email, password, nombre, apellido } = req.body

    if(!email || !password || !nombre || !apellido) return res.status(400).send("Error al registrar usuario (algun campo falta)")

    try {
        const hash = bcrypt.hashSync(password, salt)
        
        await User.create({
            nombre,
            apellido,
            email,
            password: hash
        })

        let mailOptions = {
            from: 'no-reply@entretiemposj.com',
            to: email,
            subject: 'Registro exitoso en Entretiempo',
            text: 'Bienvenido a Entretiempo en este correo confirmamos que tu correo es válido'
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email de bienvenida enviado a', email);
            }
        });

        return res.status(201).send(`${nombre} ${apellido} agregado a la base de datos!`)
    } catch (error) {
        return res.sendStatus(500)
    }

})

router.post('/login', passport.authenticate('local', { successRedirect: "/logueado", failureRedirect: "/noLogin" }))

router.get('/logeado', (req, res) => {
    res.status(200).send("LOGUEADO")
})

router.get('/noLogin', (req, res) => {
    res.status(200).send("NO LOGUEADO")
})

router.delete("/logout", (req,res) => {
    req.logOut()
    res.redirect("/noLogin")
    console.log(`-------> User Logged out`)
 })

module.exports = {
    router,
    salt
}