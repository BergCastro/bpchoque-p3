import { GET_PROVAS } from './provaActions'


const INITIAL_STATE = {list: []}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PROVAS:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}