import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import {    init, 
            updateEfetivoDescricao, 
            getCount, 
            updateTipo,
        } from './opeActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndTextArea from '../common/form/labelAndTextArea'
import LabelAndEditTextArea from './labelAndEditTextArea'
import LabelAndSelect from '../common/form/labelAndSelect'


class OpeForm extends Component {


    tipos = [
        'GUARDA DE HONRA',
        'GUARDA FÚNEBRE',
        'EVENTO ESPORTIVO'
    
    ]

    tiposDetalhes = [
        {
            nome: 'GUARDA DE HONRA',
            descricao: 'descricao guarda de honra'
        },
        {
            nome: 'GUARDA FÚNEBRE',
            descricao: 'descricao guarda funebre'
        }
    ]

    componentDidMount(){
        const { getCount, tabUpdate, tabDelete, missaoTipo } = this.props
        if(!tabUpdate && !tabDelete)
            getCount()
        
        
    }


    updateEfetivo = (value) => {
        
        this.props.updateEfetivoDescricao(value)

    }

    updateTipo = (event) => {
        const { getCount, tabUpdate, tabDelete, missaoTipo , updateTipo} = this.props 
        const value = event.target.value
        //const result = this.tiposDetalhes.filter((tipo) => tipo.nome == value)
        //console.log('result: '+JSON.stringify(result))
        updateTipo(value)
        if(!tabUpdate && !tabDelete)
            getCount()
        

    }

    



    render() {
        const { handleSubmit, readOnly } = this.props



        return (

            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='numero'  component={LabelAndInput} readOnly={readOnly}
                        label='Número' cols='12 4'  />

                    <Field name='dataMissao' component={LabelAndInput} readOnly={readOnly}
                        label='Data da Missão' cols='12 4' placeholder='Informe a data da missão' />
                    
                    <Field name='missaoTipo' component={LabelAndSelect} readOnly={readOnly}
                        label='Tipo' cols='12 4' placeholder='Selecione um tipo!' itens={this.tipos} onChange={this.updateTipo}/>
                    
                    <Field name='missaoDescricao' component={LabelAndTextArea} readOnly={readOnly}
                        label='Missão Descrição' cols='12' placeholder='Informe uma descrição' />

                    <Field name='ref' component={LabelAndTextArea} readOnly={readOnly}
                        label='Referência/Determinação' cols='12' placeholder='Informe de quem foi a determinação' />

                    <Field name='local' component={LabelAndTextArea} readOnly={readOnly}
                        label='Local' cols='12 8' placeholder='Informe o local da missão' />

                    <Field name='horaQuartel' component={LabelAndInput} readOnly={readOnly}
                        label='Horário Saída' cols='12 2' placeholder='Horário Saída' />

                    <Field name='horaLocal' component={LabelAndInput} readOnly={readOnly}
                        label='Horário no Local' cols='12 2' placeholder='Horário no Local' />


                    <Field name='efetivoDescricao' component={LabelAndEditTextArea} readOnly={readOnly}
                        label='Efetivo' cols='12' placeholder='Informe a descrição do efetivo' updateEfetivo={this.updateEfetivo} />

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

OpeForm = reduxForm({ form: 'opeForm', destroyOnUnmount: false })(OpeForm)

const selector = formValueSelector('opeForm')
const mapStateToProps = state => ({
    missaoTipo: selector(state, 'missaoTipo'),
    tabUpdate: state.tab.visible.tabUpdate,
    tabDelete: state.tab.visible.tabDelete
    

})
const mapDispatchToProps = dispatch => bindActionCreators({ 
    init, 
    updateEfetivoDescricao, 
    getCount, 
    updateTipo 
 }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OpeForm)