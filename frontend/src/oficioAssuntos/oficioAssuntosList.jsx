import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './oficioAssuntosActions'

class OficioAssuntosList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    formatDate(date){
        const data = new Date(date)
       
        return data.toLocaleDateString()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(oficioAssunto => (
            <tr key={oficioAssunto._id}>
                <td>{oficioAssunto.nome}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(oficioAssunto)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(oficioAssunto)}>
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

const mapStateToProps = state => ({list: state.oficioAssunto.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OficioAssuntosList)