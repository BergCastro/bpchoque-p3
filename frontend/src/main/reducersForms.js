import { UPDATE_EFETIVO_DESC, UPDATE_SUGESTOES, UPDATE_TIPO, GET_COUNT } from '../ope/opeActions'
import { UPDATE_EFETIVO_DESC_TIPO } from '../tipoOpe/tipoOpeActions'
import { reducer as formReducer } from 'redux-form'
import RichTextEditor from 'react-rte'



export default formReducer.plugin({
  opeForm: (state, action) => {   // <----- 'login' is name of form given to reduxForm()
    switch (action.type) {
      case UPDATE_EFETIVO_DESC:
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

      case UPDATE_SUGESTOES:
        return {
          ...state,
          values: {
            ...state.values,
            ref: action.payload.referencia,
            missaoDescricao: action.payload.missaoDescricao,
            local: action.payload.local,
            horaQuartel: action.payload.horaQuartel,
            horaLocal: action.payload.horaLocal,
            equipamento: action.payload.equipamento,
            efetivoDescricao: RichTextEditor.createValueFromString(action.payload.efetivoDescricao, 'html'),
            observacoes: action.payload.prescricoes,
            
            // <----- clear password value
          },
          registeredFields: {
            ...state.registeredFields,

          }
        }
      case UPDATE_TIPO:
        return {
          ...state,
          values: {
            ...state.values,
            missaoTipo: action.payload
            // <----- clear password value
          },
          registeredFields: {
            ...state.registeredFields,

          }
        }

      case GET_COUNT:
        return {
          ...state,
          values: {
            ...state.values,
            numero: action.payload.data.value + 1 // <----- clear password value
          },
          registeredFields: {
            ...state.registeredFields,
            efetivoDescricao: undefined // <----- clear field state, too (touched, etc.)
          }
        }
      default:
        return state
    }
  },
  tipoOpeForm: (state, action) => {   // <----- 'login' is name of form given to reduxForm()
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
  }
})

