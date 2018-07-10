import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Prova from '../prova/prova'
import TipoTeste from '../tipoTeste/tipoTeste'
import Ope from '../ope/ope'
import TipoOpe from '../tipoOpe/tipoOpe'
import TiposOficio from '../tiposOficio/tiposOficio'
import Oficios from '../oficio/oficio'


export default props => (
    <div className='content-wrapper'> 
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/provas' component={Prova} />
            <Route path='/tiposTeste' component={TipoTeste} />
            <Route path='/opes' component={Ope} />
            <Route path='/tiposOpes' component={TipoOpe} />
            <Route path='/tiposOficio' component={TiposOficio} />
            <Route path='/oficios' component={Oficios} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)