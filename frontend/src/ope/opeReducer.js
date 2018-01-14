import { GET_OPES } from './opeActions'


const INITIAL_STATE = { list: [], count: 0 }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_OPES:
            return { ...state, list: action.payload.data }
        
        default:
            return state
    }
}