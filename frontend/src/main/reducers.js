import { combineReducers } from 'redux'

import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import ProvaReducer from '../prova/provaReducer'
import TipoTesteReducer from '../tipoTeste/tipoTesteReducer'
import OpeReducer from '../ope/opeReducer'
import TipoOpeReducer from '../tipoOpe/tipoOpeReducer'
import AuthReducer from '../auth/authReducer'
import reducersForms from './reducersForms'




const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: reducersForms,
  toastr: toastrReducer,
  auth: AuthReducer,
  prova: ProvaReducer,
  tipoTeste: TipoTesteReducer,
  ope: OpeReducer,
  tipoOpe: TipoOpeReducer

})

export default rootReducer