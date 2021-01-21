
import {IS_PAGE} from '../actions/funAction';



const defaultState = {
    isPage: ''
}

const funReducer = (state= defaultState,{type,payload}) => {
    switch(type) {
        case IS_PAGE:
            return {
                ...state,
                isPage: payload
            }
        default:
            return state
    }
}

export default funReducer;