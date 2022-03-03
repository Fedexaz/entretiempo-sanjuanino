/* 
    -------------------------------------------------------------------------
    -                                                                       -
    -   ARCHIVO INICIAL PARA INICIAR EL SERVIDOR DE ENTRETIEMPO SANJUANINO  -
    -                                                                       -
    -------------------------------------------------------------------------
*/

const { conexion } = require('./database')
const servidor = require('./servidor')

require('dotenv').config()

servidor.listen(process.env.PORT, () => {
    conexion.sync({
        force: true
    }).then((res) => {
        console.log("Sincronización con la base de datos exitosa!");
    })
    console.log("Servidor de Entretiempo iniciado en el puerto", process.env.PORT)
})