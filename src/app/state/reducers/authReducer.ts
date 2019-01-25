import * as ActionTypes from "../action-types";

const INITIAL_STATE = {
    authenticated: false
}

export default function authReducer(state = INITIAL_STATE, action: any) {
    switch(action.type) {
        case ActionTypes.LOGGED_IN: 
            return Object.assign({}, state, {authenticated: true})
        case ActionTypes.LOGGED_OUT:
                        return Object.assign({}, state, {authenticated: false});
        default:
            return state;
    }
}