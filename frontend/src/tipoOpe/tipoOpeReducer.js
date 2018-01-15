import { GET_TIPOS_OPES, UPDATE_EFETIVO_DESC_TIPO } from './tipoOpeActions'


const INITIAL_STATE = { list: [], count: 0 }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TIPOS_OPES:
            return { ...state, list: action.payload.data }
        case UPDATE_EFETIVO_DESC_TIPO:
            return {
                ...state,
                form: {...state,
                    tipoOpeForm: {
                        values: {
                            ...state.values,
                            efetivoDescricao: 'action.payload',

                        },
                        registeredFields: {
                            ...state.registeredFields,
                            efetivoDescricao: undefined // <----- clear field state, too (touched, etc.)
                        }
                    }
                }
            }

        default:
            return state
    }
}

