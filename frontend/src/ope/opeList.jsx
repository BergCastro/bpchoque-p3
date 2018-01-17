import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './opeActions'
import sortBy from 'sort-by'

class OpeList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    formatDate(date){
        const data = new Date(date)
       
        return data.toLocaleDateString()
    }

    renderRows() {
        const list = this.props.list || []
        const listByNumero = list.sort(sortBy('-numero'))
        return listByNumero.map(ope => (
            <tr key={ope._id}>
                <td>{ope.numero}</td>
                <td>{this.formatDate(ope.data)}</td>
                <td>{ope.missaoTipo}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(ope)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(ope)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
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
                            <th>Data</th>
                            <th>Tipo</th>
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

const mapStateToProps = state => ({list: state.ope.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OpeList)