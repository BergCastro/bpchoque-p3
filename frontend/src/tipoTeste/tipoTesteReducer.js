import { GET_TIPOS } from './tipoTesteActions'


const INITIAL_STATE = {list: [], provas:[]}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TIPOS:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}