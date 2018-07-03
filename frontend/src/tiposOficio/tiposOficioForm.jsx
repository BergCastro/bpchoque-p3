import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init, getCount, updateConteudo } from './tiposOficioActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndTextArea from '../common/form/labelAndTextArea'
import LabelAndEditTextArea from '../common/form/labelAndEditTextArea'



class TiposOficioForm extends Component {


    updateConteudo = (value) => {
        
        this.props.updateConteudo(value)

    }


    render() {
        const { handleSubmit, readOnly , conteudo} = this.props



        return (

            <form onSubmit={handleSubmit}>
                <div className='box-body'>

                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12' placeholder='Informe um nome' />

                    <Field name='referencia' component={LabelAndTextArea} readOnly={readOnly}
                        label='Referência/Determinação' cols='12' placeholder='Informe de quem foi a determinação' />

                    <Field name='anexo' component={LabelAndTextArea} readOnly={readOnly}
                        label='Anexo' cols='12' placeholder='Informe uma descrição' />

                    <Field name='destino' component={LabelAndTextArea} readOnly={readOnly}
                        label='Destino' cols='12' placeholder='Informe o local da missão' />

                    


                    <Field name='conteudo' component={LabelAndEditTextArea} readOnly={readOnly}
                        label='Conteúdo' cols='12' placeholder='Informe a descrição do efetivo' updateValor={this.updateConteudo} valor={conteudo}/>
                  
                   

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

TiposOficioForm = reduxForm({ form: 'tiposOficioForm', destroyOnUnmount: false })(TiposOficioForm)

const selector = formValueSelector('tiposOficioForm')
const mapStateToProps = state => ({
    missaoTipo: selector(state, 'missaoTipo'),
    conteudo: selector(state, 'conteudo'),
    tabUpdate: state.tab.visible.tabUpdate,
    tabDelete: state.tab.visible.tabDelete


})
const mapDispatchToProps = dispatch => bindActionCreators({
    init, getCount, updateConteudo
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TiposOficioForm)