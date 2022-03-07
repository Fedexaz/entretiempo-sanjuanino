import axios from 'axios'

import actionType from '../actionTypes'

export function getEquipos() {    
    return async (dispatch) =>{
        try {
            const respuesta = await axios.get(`/api/equipos?key=${process.env.REACT_APP_API_KEY || 'hola'}`)
            return dispatch({
                type: actionType.GET_EQUIPOS,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getJugadores() {
    return async (dispatch) =>{
        try {
            const respuesta = await axios.get(`/api/jugadores?key=${process.env.REACT_APP_API_KEY || 'hola'}`)
            return dispatch({
                type: actionType.GET_JUGADORES,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getPartidos(){
    return async (dispatch) =>{
        try {
            const respuesta = await axios.get(`/api/partidos?key=${process.env.REACT_APP_API_KEY || 'hola'}`)
            return dispatch({
                type: actionType.GET_PARTIDOS,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}