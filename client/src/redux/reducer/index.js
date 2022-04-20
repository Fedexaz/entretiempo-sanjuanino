import { SET_TOKEN } from '../actions/actionTypes';

const initialState = {
    token: ''
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN: {
            return {
                ...state,
                token: action.payload
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}