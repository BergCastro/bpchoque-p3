import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './provaActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndTextArea from '../common/form/labelAndTextArea'
import LabelAndSelect from '../common/form/labelAndSelect'


class ProvaForm extends Component {

    tipos = ['INTEIRO', 'APTO_INAPTO',
        'TEMPO SEG', 'TEMPO MIN']

    
    



    render() {
        const { handleSubmit, readOnly } = this.props
        
        return (
            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 8' placeholder='Informe o nome' />

                    <Field name='tipo' component={LabelAndSelect} readOnly={readOnly}
                        label='Descrição' cols='12 4' placeholder='Informe uma descrição' itens={this.tipos} />

                    <Field name='descricao' component={LabelAndTextArea} readOnly={readOnly}
                        label='Descrição' cols='12' placeholder='Informe uma descrição' />
                    
                   



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

ProvaForm = reduxForm({ form: 'provaForm', destroyOnUnmount: false })(ProvaForm)
const selector = formValueSelector('provaForm')
const mapStateToProps = state => ({
    provas: selector(state, 'prova'),

})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProvaForm)