import actionTypes from '../actionTypes'

const initialState = {
    partidos: [],
    equipos: [],
    jugadores: []
}

export default function reducer (state = initialState, action){
    switch(action.type){

        case actionTypes.GET_EQUIPOS:{
            return {
                ...state,
                equipos: action.payload
            }
        }

        case actionTypes.GET_PARTIDOS:{
            return {
                ...state,
                partidos: action.payload
            }
        }

        case actionTypes.GET_JUGADORES:{
            return {
                ...state,
                jugadores: action.payload
            }
        }

        default:{
            return state
        }
    }
}