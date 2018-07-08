import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <label {...props.input} className='form-control'
                 >{props.valor}</label>
        </div>
    </Grid>
)