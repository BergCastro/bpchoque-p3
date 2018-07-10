import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path='billingCycles'
                label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
        <MenuTree label='P3' icon='edit'> 
            <MenuItem path='opes'
                label="OPE's" icon='file-text' />
            <MenuItem path='tiposOpes'
                label="Tipos de OPEs" icon='file-text' />
             <MenuItem path='tiposOficio'
                label="Tipos de Ofícios" icon='file-text' />
            <MenuItem path='oficios'
                label="Ofícios" icon='file-text' />
            
        </MenuTree>
       
        <MenuItem path='pessoas' label='Pessoas' icon='users' />
    </ul>
)