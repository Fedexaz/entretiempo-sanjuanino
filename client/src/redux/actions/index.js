import { SET_TOKEN } from '../actions/actionTypes';

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token,
    }
}