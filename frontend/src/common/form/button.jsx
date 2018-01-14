import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label></label>
            <button type={props.tipo} className='btn btn-primary form-control' onClick={props.onClick}>
                {props.nome}
                    </button>
        </div>
    </Grid>
)