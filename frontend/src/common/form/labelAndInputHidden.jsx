import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            
            <input {...props.input} className='form-control'
                 
                 readOnly={false} type="hidden" value={props.valor} />
        </div>
    </Grid>
)