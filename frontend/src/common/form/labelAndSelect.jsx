import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>

            <select {...props.input} className="form-control" readOnly={props.readOnly} type={props.type}>
                <option value="">Selecione uma opção</option>
                {props.itens.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    </Grid>
)