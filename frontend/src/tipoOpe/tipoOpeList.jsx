import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './tipoOpeActions'

class TipoOpeList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    formatDate(date){
        const data = new Date(date)
       
        return data.toLocaleDateString()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(tipoOpe => (
            <tr key={tipoOpe._id}>
                <td>{tipoOpe.nome}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(tipoOpe)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(tipoOpe)}>
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
                            <th>Nome</th>
                            
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

const mapStateToProps = state => ({list: state.tipoOpe.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TipoOpeList)