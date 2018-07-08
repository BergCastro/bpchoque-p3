import React, { Component } from 'react'
import sortBy from 'sort-by'

class OficioStatusList extends Component {



    formatDate(date) {
        const data = new Date(date)
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }

        return data.toLocaleDateString('pt-BR', options)
    }

    renderRows() {
        const list = this.props.list || []
        const listByNumero = list.sort(sortBy('dataHora'))
        return listByNumero.map((status, index) => (
            <tr key={index}>
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