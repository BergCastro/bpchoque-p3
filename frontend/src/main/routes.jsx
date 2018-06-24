import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Prova from '../prova/prova'
import TipoTeste from '../tipoTeste/tipoTeste'
import Ope from '../ope/ope'
import TipoOpe from '../tipoOpe/tipoOpe'
import OficioAssuntos from '../oficioAssuntos/oficioAssuntos'


export default props => (
    <div className='content-wrapper'> 
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Route path='/provas' component={Prova} />
            <Route path='/tiposTeste' component={TipoTeste} />
            <Route path='/opes' component={Ope} />
            <Route path='/tiposOpes' component={TipoOpe} />
            <Route path='/oficioAssuntos' component={OficioAssuntos} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)