import { GET_TIPOS_OPES, UPDATE_EFETIVO_DESC_TIPO } from './tipoOpeActions'
import { reducer as formReducer } from 'redux-form'





export default formReducer.plugin({tipoOpeForm: (state, action) => {   // <----- 'login' is name of form given to reduxForm()
switch (action.type) {
  case UPDATE_EFETIVO_DESC_TIPO:
    return {
      ...state,
      values: {
        ...state.values,
        efetivoDescricao: action.payload // <----- clear password value
      },
      registeredFields: {
        ...state.registeredFields,
        efetivoDescricao: undefined // <----- clear field state, too (touched, etc.)
      }
    }

  
  default:
    return state
}
}})

