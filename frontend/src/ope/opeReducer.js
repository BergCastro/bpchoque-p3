import { GET_OPES, GET_TIPOS_OPES } from './opeActions'


const INITIAL_STATE = { list: [], tiposOpes: [], sugestao: {}, count: 0 }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_OPES:
            return { ...state, list: action.payload.data }
        case GET_TIPOS_OPES:
            return { ...state, tiposOpes: action.payload.data }
       


        default:
            return state
    }
}

