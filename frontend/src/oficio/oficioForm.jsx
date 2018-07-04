import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import {
    init,
    updateConteudo,
    getCount,
    updateTipoOficio,
    updateSugestoes
} from './oficioActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndTable from '../common/form/labelAndTable'
import LabelAndTextArea from '../common/form/labelAndTextArea'
import LabelAndEditTextArea from './labelAndEditTextArea'
import LabelAndSelect from '../common/form/labelAndSelect'
import RichTextEditor from 'react-rte'
import ListStatus from './oficioStatusList'


class OficioForm extends Component {



    prioridades = [
        'OBRIGATÓRIA',
        'PARCIAL',
        'DE ACORDO COM A DEMANDA'
    ]

    statusList = [
        'Aberto',
        'Em transito',
        'Arquivado'
    
    ]

    state = {
        value: RichTextEditor.createEmptyValue()
    }


    componentDidMount() {
        const { conteudo } = this.props


        this.setState({ value: RichTextEditor.createValueFromString(conteudo, 'html') })

    }




    updateTipo = (event) => {
        const { tabUpdate, tabDelete, updateSugestoes, tiposOficios } = this.props
        const value = event.target.value

        updateTipoOficio(value)
        if (!tabUpdate && !tabDelete) {
            const tipoOficio = tiposOficios.filter((tipo) => tipo.nome === value)

            updateSugestoes(tipoOficio[0])
            this.setState({ value: RichTextEditor.createValueFromString(tipoOficio[0].conteudo, 'html') })
        }



    }
    updateStatus = (event) => {
        const value = event.target.value
        //updateStatus(value)
    }



    onChange = (value) => {
        this.setState({ value })

        this.props.updateConteudo(value.toString('html'))

    }




    render() {
        const { handleSubmit, readOnly, tiposOficios, status } = this.props
        const tiposNomes = tiposOficios.map((tipo) => tipo.nome)



        return (

            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='numero' component={LabelAndInput} readOnly={readOnly}
                        label='Número' cols='12 2' />

                    <Field name='data' component={LabelAndInput} readOnly={readOnly}
                        label='Data da Missão' cols='12 3' placeholder='Informe a data da missão' />

                    <Field name='assunto' component={LabelAndSelect} readOnly={readOnly}
                        label='Tipo' cols='12 4' placeholder='Selecione um tipo!' itens={tiposNomes} onChange={this.updateTipo} />

                    <Field name='statusAtual' component={LabelAndSelect} readOnly={readOnly}
                        label='Status Atual' cols='12 3' placeholder='Selecione um tipo!' itens={this.statusList} onChange={this.updateTipo} />


                    <Field name='referencia' component={LabelAndTextArea} readOnly={readOnly}
                        label='Referência/Determinação' cols='12' placeholder='Informe de quem foi a determinação' />

                    <Field name='anexo' component={LabelAndTextArea} readOnly={readOnly}
                        label='Anexo' cols='12' placeholder='Informe uma descrição' />

                    <Field name='destino' component={LabelAndTextArea} readOnly={readOnly}
                        label='Destino' cols='12' placeholder='Informe o local da missão' />


                    <LabelAndEditTextArea readOnly={readOnly}
                        label='Conteúdo' cols='12' placeholder='Informe o conteúdo' valor={this.state.value} onChange={this.onChange} />



                    <ListStatus list={status} />
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

OficioForm = reduxForm({ form: 'oficioForm', destroyOnUnmount: false })(OficioForm)

const selector = formValueSelector('oficioForm')
const mapStateToProps = state => ({
    assunto: selector(state, 'assunto'),
    conteudo: selector(state, 'conteudo'),
    status: selector(state, 'status'),

    //tabUpdate: state.tab.visible.tabUpdate,
    // tabDelete: state.tab.visible.tabDelete,
    tiposOficios: state.oficio.tiposOficios


})
const mapDispatchToProps = dispatch => bindActionCreators({
    init,
    updateConteudo,
    getCount,
    updateTipoOficio,
    updateSugestoes
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OficioForm)