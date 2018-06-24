import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init, getCount } from './oficioAssuntosActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndTextArea from '../common/form/labelAndTextArea'
import LabelAndEditTextArea from '../common/form/labelAndEditTextArea'



class OficioAssuntosForm extends Component {



   



    render() {
        const { handleSubmit, readOnly , efetivoDescricao} = this.props



        return (

            <form onSubmit={handleSubmit}>
                <div className='box-body'>

                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12' placeholder='Informe um nome' />

                   

                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

OficioAssuntosForm = reduxForm({ form: 'oficioAssuntosForm', destroyOnUnmount: false })(OficioAssuntosForm)

const selector = formValueSelector('oficioAssuntosForm')
const mapStateToProps = state => ({
    missaoTipo: selector(state, 'missaoTipo'),
    efetivoDescricao: selector(state, 'efetivoDescricao'),
    tabUpdate: state.tab.visible.tabUpdate,
    tabDelete: state.tab.visible.tabDelete


})
const mapDispatchToProps = dispatch => bindActionCreators({
    init, getCount
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OficioAssuntosForm)