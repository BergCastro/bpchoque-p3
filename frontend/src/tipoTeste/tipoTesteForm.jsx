import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'



import { init, updateProvas } from './tipoTesteActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndTextArea from '../common/form/labelAndTextArea'
import LabelAndInputSearch from '../common/form/labelAndInputSearch'
import Button from '../common/form/button'
import ItemList from './itemList'
import { getList } from '../prova/provaActions'



class TipoTesteForm extends Component {
    
    state = {
        provaAddCurrent: {}
    }

    componentWillMount() {
        this.props.getList()
    }

    handleAdicionarProva = (event) => {
        event.preventDefault()
        console.log('clicou')
        const tipoTesteCurrent = this.props.tipoTeste
        
        const tipoTeste = {
            ...tipoTesteCurrent,
            provas:[...tipoTesteCurrent.provas,{
            id: Date.now(),
            nome: 'provateste3',
            descricao: 'provateste decri'
        }]
            
        }
        console.log('tipo teste: '+ JSON.stringify(tipoTeste))
        this.props.updateProvas(tipoTeste)

    } 

    render() {
        const { handleSubmit, readOnly, provas, provasTipoTeste } = this.props
        
        return (
            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 8' placeholder='Informe o nome' />


                    <Field name='descricao' component={LabelAndTextArea} readOnly={readOnly}
                        label='Descrição' cols='12' placeholder='Informe uma descrição' />

                    <LabelAndInputSearch list={provas} cols='12 3' label='Adicionar prova' />

                    <Button cols='12 2' nome='Adicionar' onClick={this.handleAdicionarProva} tipo='button'/>

                    <ItemList cols='12' list={provasTipoTeste} readOnly={readOnly}
                        field='provas' legend='Provas' />
                    


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

TipoTesteForm = reduxForm({ form: 'tipoTesteForm', destroyOnUnmount: false })(TipoTesteForm)
const selector = formValueSelector('tipoTesteForm')
const mapStateToProps = state => ({
    provas: state.prova.list,
    provasTipoTeste: selector(state, 'provas'),
    tipoTeste: state.form.tipoTesteForm.values

})
const mapDispatchToProps = dispatch => bindActionCreators({ init, getList, updateProvas }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TipoTesteForm)