import { GET_TIPOS_OFICIO } from './tiposOficioActions'



const INITIAL_STATE = { list: [], count: 0 }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TIPOS_OFICIO:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}

