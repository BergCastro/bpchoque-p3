import { UPDATE_EFETIVO_DESC, UPDATE_SUGESTOES, UPDATE_TIPO, GET_COUNT } from '../ope/opeActions'
import { UPDATE_EFETIVO_DESC_TIPO } from '../tipoOpe/tipoOpeActions'
import { reducer as formReducer } from 'redux-form'
import { UPDATE_CONTEUDO, 
         UPDATE_SUGESTOES_OFICIO, 
         UPDATE_TIPO_OFICIO, 
         UPDATE_USER,
         UPDATE_STATUS_ATUAL } from '../oficio/oficioActions'
import { UPDATE_CONTEUDO_TIPO } from '../tiposOficio/tiposOficioActions'




export default formReducer.plugin({
  opeForm: (state, action) => {   // <----- 'login' is name of form given to reduxForm()
    switch (action.type) {
      case UPDATE_EFETIVO_DESC:
        return {
          ...state,
          values: {
            ...state.values,
            efetivoDescricao: action.payload  // <----- clear password value
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
            referencia: action.payload.referencia,
            conteudo: action.payload.conteudo,
            
            
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
            numero: action.payload.data.value + 1
            // <----- clear password value
          },
          registeredFields: {
            ...state.registeredFields,

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
  },
  oficioForm: (state, action) => {   // <----- 'login' is name of form given to reduxForm()
    switch (action.type) {
      case UPDATE_CONTEUDO:
        return {
          ...state,
          values: {
            ...state.values,
            conteudo: action.payload // <----- clear password value
          },
          registeredFields: {
            ...state.registeredFields,
            conteudo: '' // <----- clear field state, too (touched, etc.)
          }
        }
        case UPDATE_USER:
        return {
          ...state,
          values: {
            ...state.values,
            user: action.payload // <----- clear password value
          },
          registeredFields: {
            ...state.registeredFields,
            conteudo: '' // <----- clear field state, too (touched, etc.)
          }
        }
        case UPDATE_STATUS_ATUAL:
        return {
          ...state,
          values: {
            ...state.values,
            statusAtual: action.payload.status,
            status:[ ...state.initial.status,
              action.payload

            ]
          },
          registeredFields: {
            ...state.registeredFields,
            conteudo: '' // <----- clear field state, too (touched, etc.)
          }
        }
        case UPDATE_TIPO_OFICIO:
        return {
          ...state,
          values: {
            ...state.values,
            assunto: action.payload
            // <----- clear password value
          },
          registeredFields: {
            ...state.registeredFields,

          }
        }
        case UPDATE_SUGESTOES_OFICIO:
        return {
          ...state,
          values: {
            ...state.values,
            referencia: action.payload.referencia,
            anexo: action.payload.anexo,
            destino: action.payload.destino,
            conteudo: action.payload.horaQuartel,
            
            
            // <----- clear password value
          },
          registeredFields: {
            ...state.registeredFields,

          }
        }

     
      default:
        return state
    }
  },
  tiposOficioForm: (state, action) => {   // <----- 'login' is name of form given to reduxForm()
    switch (action.type) {
      case UPDATE_CONTEUDO_TIPO:
        return {
          ...state,
          values: {
            ...state.values,
            conteudo: action.payload // <----- clear password value
          },
          registeredFields: {
            ...state.registeredFields,
            conteudo: '' // <----- clear field state, too (touched, etc.)
          }
        }
        

     
      default:
        return state
    }
  }

})

