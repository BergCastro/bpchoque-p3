import { GET_ASSUNTOS_OFICIOS } from './oficioAssuntosActions'



const INITIAL_STATE = { list: [], count: 0 }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ASSUNTOS_OFICIOS:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}

