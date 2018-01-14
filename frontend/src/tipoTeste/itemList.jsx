import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../common/layout/grid'


class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('tipoTesteForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('tipoTesteForm', this.props.field, index)
        }
    }



    render() {
            const { list } = this.props
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>

                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {list.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.nome}
                                    </td>
                                    <td>{item.descricao}
                                    </td>


                                    <td>
                                        <button type='button' className='btn btn-success'
                                            onClick={() => this.add(index + 1)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                       
                                        <button type='button' className='btn btn-danger'
                                            onClick={() => this.remove(index)}>
                                            <i className="fa fa-trash-o"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)