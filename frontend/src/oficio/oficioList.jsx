import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './oficioActions'
import sortBy from 'sort-by'

class OficioList extends Component {

    componentWillMount() {
        this.props.getList()
    }

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
    formatNumero(number) {
        const length = number.length
        switch (length) {
            case 1:
                return '000' + number
            case 2:
                return '00' + number                
            case 3:
                return '0' + number
            default: 
                return number
            
        }

    }
    styleFontRed = {
        color: 'red',
        //fontWeight: 'bold'
    }

    renderRows() {
        const list = this.props.list || []
        const listByNumero = list.sort(sortBy('-numero'))
        return listByNumero.map(oficio => (

            <tr key={oficio._id} style={oficio.statusAtual === 'Cancelado' ? this.styleFontRed: {color: 'black'} }>
                <td>{this.formatNumero(oficio.numero+"")}</td>
                <td>{this.formatDate(oficio.data)}</td>
                <td>{oficio.assunto}</td>
                <td>{oficio.destino}</td>
                <td>{oficio.statusAtual}</td>
                <td>
                    <button className='btn btn-success' onClick={() => this.props.showUpdate(oficio)}>
                        <i className='glyphicon glyphicon-search'></i>
                    </button>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(oficio)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    {/*<button className='btn btn-danger' onClick={() => this.props.showDelete(oficio)}>
                        <i className='fa fa-trash-o'></i> 
        </button>*/}
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Data Ofício</th>
                            <th>Tipo</th>
                            <th>Destino</th>
                            <th>Status Atual</th>
                            <th className='table-actions'>Ações</th>
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

const mapStateToProps = state => ({ list: state.oficio.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OficioList)