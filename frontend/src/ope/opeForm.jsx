import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import {
    init,
    updateEfetivoDescricao,
    getCount,
    updateTipo,
    updateSugestoes
} from './opeActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndTextArea from '../common/form/labelAndTextArea'
import LabelAndEditTextArea from './labelAndEditTextArea'
import LabelAndSelect from '../common/form/labelAndSelect'


class OpeForm extends Component {


    
    prioridades = [
        'OBRIGATÓRIA',
        'PARCIAL',
        'DE ACORDO COM A DEMANDA'
    ]

   

    componentWillMount() {
        const {  tabUpdate, tabDelete, getCount } = this.props
        if (!tabUpdate && !tabDelete)
            getCount()


    }


    updateEfetivo = (value) => {

        this.props.updateEfetivoDescricao(value)

    }

    updateTipo = (event) => {
        const { tabUpdate, tabDelete, updateTipo, updateSugestoes, tiposOpes } = this.props
        const value = event.target.value
        
        updateTipo(value)
        if (!tabUpdate && !tabDelete){
            const tipoOpe = tiposOpes.filter((tipo) => tipo.nome === value)
            
            updateSugestoes(tipoOpe[0])
        }
           


    }





    render() {
        const { handleSubmit, readOnly, tiposOpes } = this.props
        const tiposNomes = tiposOpes.map((tipo) => tipo.nome)
        


        return (

            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='numero' component={LabelAndInput} readOnly={readOnly}
                        label='Número' cols='12 3' />

                    <Field name='prioridade' component={LabelAndSelect} readOnly={readOnly}
                        label='Prioridade' cols='12 3' placeholder='Selecione uma prioridade!' itens={this.prioridades}  />

                    <Field name='dataMissao' component={LabelAndInput} readOnly={readOnly}
                        label='Data da Missão' cols='12 3' placeholder='Informe a data da missão' />

                    <Field name='missaoTipo' component={LabelAndSelect} readOnly={readOnly}
                        label='Tipo' cols='12 3' placeholder='Selecione um tipo!' itens={tiposNomes} onChange={this.updateTipo} />

                    <Field name='ref' component={LabelAndTextArea} readOnly={readOnly}
                        label='Referência/Determinação' cols='12' placeholder='Informe de quem foi a determinação' />

                    <Field name='missaoDescricao' component={LabelAndTextArea} readOnly={readOnly}
                        label='Missão Descrição' cols='12' placeholder='Informe uma descrição' />

                    <Field name='local' component={LabelAndTextArea} readOnly={readOnly}
                        label='Local' cols='12' placeholder='Informe o local da missão' />

                    <Field name='horaQuartel' component={LabelAndInput} readOnly={readOnly}
                        label='Horário Saída' cols='12 6' placeholder='Horário Saída' />

                    <Field name='horaLocal' component={LabelAndInput} readOnly={readOnly}
                        label='Horário no Local' cols='12 6' placeholder='Horário no Local' />


                    <Field name='efetivoDescricao' component={LabelAndEditTextArea} readOnly={readOnly}
                        label='Efetivo' cols='12' placeholder='Informe a descrição do efetivo' updateValor={this.updateEfetivo} />
                    
                    <Field name='equipamento' component={LabelAndTextArea} readOnly={readOnly}
                        label='Armamento/Equipamento' cols='12' placeholder='Informe o equipamento para a missão' />
                    
                    <Field name='observacoes' component={LabelAndTextArea} readOnly={readOnly}
                        label='Prescrições Diversas' cols='12' placeholder='Informe as prescrições para a missão' />

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
    efetivoDescricao: selector(state, 'efetivoDescricao'),
    tabUpdate: state.tab.visible.tabUpdate,
    tabDelete: state.tab.visible.tabDelete,
    tiposOpes: state.ope.tiposOpes


})
const mapDispatchToProps = dispatch => bindActionCreators({
    init,
    updateEfetivoDescricao,
    getCount,
    updateTipo,
    updateSugestoes
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OpeForm)