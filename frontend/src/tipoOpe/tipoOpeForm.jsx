import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init, getCount, updateEfetivoDescricao } from './tipoOpeActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndTextArea from '../common/form/labelAndTextArea'
import LabelAndEditTextArea from '../common/form/labelAndEditTextArea'



class TipoOpeForm extends Component {



    updateEfetivo = (value) => {
        
        this.props.updateEfetivoDescricao(value)

    }



    render() {
        const { handleSubmit, readOnly , efetivoDescricao} = this.props



        return (

            <form onSubmit={handleSubmit}>
                <div className='box-body'>

                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12' placeholder='Informe um nome' />

                    <Field name='referencia' component={LabelAndTextArea} readOnly={readOnly}
                        label='Referência/Determinação' cols='12' placeholder='Informe uma referência' />

                    <Field name='local' component={LabelAndTextArea} readOnly={readOnly}
                        label='Local da Missão:' cols='12' placeholder='Informe uma referência' />

                    <Field name='missaoDescricao' component={LabelAndTextArea} readOnly={readOnly}
                        label='Missão Descrição' cols='12' placeholder='Informe uma descrição' />

                    <Field name='horaQuartel' component={LabelAndInput} readOnly={readOnly}
                        label='Horário Saída' cols='12 6' placeholder='Informe o horário saída' />

                    <Field name='horaLocal' component={LabelAndInput} readOnly={readOnly}
                        label='Horário Local' cols='12 6' placeholder='Informe o horário no local' />

            
                    <Field name='efetivoDescricao' component={LabelAndEditTextArea} readOnly={readOnly}
                        label='Efetivo' cols='12' placeholder='Informe a descrição do efetivo' updateValor={this.updateEfetivo} valor={efetivoDescricao}/>

                    <Field name='equipamento' component={LabelAndTextArea} readOnly={readOnly}
                        label='Equipamento' cols='12' placeholder='Informe o efetivo' />

                    <Field name='prescricoes' component={LabelAndTextArea} readOnly={readOnly}
                        label='Prescrições Diversas' cols='12' placeholder='Informe as prescrições' />

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

TipoOpeForm = reduxForm({ form: 'tipoOpeForm', destroyOnUnmount: false })(TipoOpeForm)

const selector = formValueSelector('tipoOpeForm')
const mapStateToProps = state => ({
    missaoTipo: selector(state, 'missaoTipo'),
    efetivoDescricao: selector(state, 'efetivoDescricao'),
    tabUpdate: state.tab.visible.tabUpdate,
    tabDelete: state.tab.visible.tabDelete


})
const mapDispatchToProps = dispatch => bindActionCreators({
    init, getCount, updateEfetivoDescricao
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TipoOpeForm)