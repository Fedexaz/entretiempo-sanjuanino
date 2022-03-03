/* 
    -------------------------------------------------------------------------
    -                                                                       -
    -   ARCHIVO INICIAL PARA INICIAR EL SERVIDOR DE ENTRETIEMPO SANJUANINO  -
    -                                                                       -
    -------------------------------------------------------------------------
*/

const servidor = require('./servidor')

require('dotenv').config()

servidor.listen(process.env.PORT, () => {
    console.log("Servidor de Entretiempo iniciado en el puerto", process.env.PORT)
})