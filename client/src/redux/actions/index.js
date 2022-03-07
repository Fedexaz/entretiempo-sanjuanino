import axios from 'axios'

import actionType from '../actionTypes'

export default actions  = {
    getEquipos: getEquipos = () => {    
        return async (dispatch) =>{
            const respuesta = await axios.get('/api/equipos?key=hola')
            return {
                type: actionType.GET_EQUIPOS,
                payload: respuesta.data
            }
        }
    },
    getJugadores: getJugadores = () => {
        return async (dispatch) =>{
            const respuesta = await axios.get('/api/jugadores?key=hola')
            return {
                type: actionType.GET_JUGADORES,
                payload: respuesta.data
            }
        }
    },
    getPartidos: getPartidos = () => {
        return async (dispatch) =>{
            const respuesta = await axios.get('/api/partidos?key=hola')
            return {
                type: actionType.GET_PARTIDOS,
                payload: respuesta.data
            }
        }
    }
}