import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import ProvaReducer from '../prova/provaReducer'
import TipoTesteReducer from '../tipoTeste/tipoTesteReducer'
import OpeReducer from '../ope/opeReducer'
import TipoOpeReducer from '../tipoOpe/tipoOpeReducer'
import AuthReducer from '../auth/authReducer'
import {
  UPDATE_EFETIVO_DESC, GET_COUNT,
  UPDATE_TIPO, UPDATE_SUGESTOES
} from '../ope/opeActions'
import {
  UPDATE_EFETIVO_DESC_SUGES
} from '../tipoOpe/tipoOpeActions'


const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer.plugin({
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
    }
  },
    {
      tipoOpeForm: (state, action) => {   // <----- 'login' is name of form given to reduxForm()
        switch (action.type) {
         
          case UPDATE_EFETIVO_DESC_SUGES:
            return {
              ...state,
              values: {
                ...state.values,
                efetivoDescricao: action.payload,

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
    }),
  toastr: toastrReducer,
  auth: AuthReducer,
  prova: ProvaReducer,
  tipoTeste: TipoTesteReducer,
  ope: OpeReducer,
  tipoOpe: TipoOpeReducer

})

export default rootReducer