import React, { Component } from 'react'
import { connect } from 'react-redux'
import sortBy from 'sort-by'

class OficioStatusList extends Component {

    

    formatDate(date){
        const data = new Date(date)
       
        return data.toLocaleDateString()
    }

    renderRows() {
        const list = this.props.list || []
        const listByNumero = list.sort(sortBy('-numero'))
        return listByNumero.map(status => (
            <tr key={status._id}>
                <td>{this.formatDate(status.dataHora)}</td>
                <td>{status.responsavel}</td>
                <td>{status.status}</td>
                
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Responsável</th>
                            <th>Status</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}



export default OficioStatusList