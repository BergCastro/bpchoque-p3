import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'





const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {

    conteudo: '',
    assunto: '',
    referencia: '',
    destino: '',
    local: '',
    anexo: '',
    user: '',
    statusAtual: 'Não iniciado'



}

export const GET_OFICIOS = 'GET_OFICIOS'
export const GET_TIPOS_OFICIO = 'GET_TIPOS_OFICIO'
export const GET_COUNT_OFICIO = 'GET_COUNT_OFICIO'
export const UPDATE_CONTEUDO = 'UPDATE_CONTEUDO'
export const UPDATE_TIPO_OFICIO = 'UPDATE_TIPO_OFICIO'
export const UPDATE_SUGESTOES_OFICIO = 'UPDATE_SUGESTOES_OFICIO'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_STATUS_ATUAL = 'UPDATE_STATUS_ATUAL'


export function getList() {
    const request = axios.get(`${BASE_URL}/oficios`)
    return {
        type: GET_OFICIOS,
        payload: request
    }
}

export function getTiposOficios() {
    const request = axios.get(`${BASE_URL}/tiposOficio`)
    return {
        type: GET_TIPOS_OFICIO,
        payload: request
    }
}

export function getCount() {
    const response = axios.get(`${BASE_URL}/oficios/count`)
    return {
        type: GET_COUNT_OFICIO,
        payload: response
    }
}

export function updateConteudo(value) {

    return {
        type: UPDATE_CONTEUDO,
        payload: value
    }
}

export function updateTipoOficio(value) {

    return {
        type: UPDATE_TIPO_OFICIO,
        payload: value
    }
}

export function updateSugestoes(value) {

    return {
        type: UPDATE_SUGESTOES_OFICIO,
        payload: value
    }
}

export function updateUser(value) {
    
    return {
        type: UPDATE_USER,
        payload: value
    }
}

export function updateStatusAtual(value, user) {
    const newStatus = {
            
        status: value,
        dataHora: Date.now(),
        responsavel: user
    }

    return {
        type: UPDATE_STATUS_ATUAL,
        payload: newStatus       

    }
}


export function create(values) {
    // const user = state.auth.user
    console.log('values: ' + JSON.stringify(values))
    const valor = {
        ...values,
        statusAtual: 'Aberto',
        status: [
            {
                status: "Aberto",
                dataHora: Date.now(),
                responsavel: values.user
            }
        ]
    }
    return submit(valor, 'post')
}



export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        //const valores = {...values,
        //              efetivoDescricao: values.efetivoDescricao.toString('html')}
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/oficios/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                console.log('event: ' + e)
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(oficio) {
    //const oficioValue = {...oficio,
    //efetivoDescricao: RichTextEditor.createValueFromString(oficio.efetivoDescricao, 'html')}
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('oficioForm', oficio)
    ]
}

export function showDelete(oficio) {
    //const oficioValue = {...oficio,
    //    efetivoDescricao: RichTextEditor.createValueFromString(oficio.efetivoDescricao, 'html')}
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('oficioForm', oficio)
    ]
}

export function init() {
    //const numero = axios.get(`${BASE_URL}/oficios/count`)

    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        getTiposOficios(),
        initialize('oficioForm', INITIAL_VALUES),
        getCount()

    ]
}