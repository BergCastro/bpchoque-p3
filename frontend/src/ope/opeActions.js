import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
import RichTextEditor from 'react-rte'




const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {
    efetivoDescricao: RichTextEditor.createEmptyValue(),
    ref: '',
    missaoDescricao: '',
    local: '',
    horaQuartel: '',
    horaLocal: '',
    equipamento: '',
    observacoes: '',
    numero: '',
}

export const GET_OPES = 'GET_OPES'
export const GET_TIPOS_OPES = 'GET_TIPOS_OPES'
export const GET_COUNT = 'GET_COUNT'
export const UPDATE_EFETIVO_DESC = 'UPDATE_EFETIVO_DESC'
export const UPDATE_TIPO = 'UPDATE_TIPO'
export const UPDATE_SUGESTOES = 'UPDATE_SUGESTOES'


export function getList() {
    const request = axios.get(`${BASE_URL}/opes`)
    return {
        type: GET_OPES,
        payload: request
    }
}

export function getTiposOpes() {
    const request = axios.get(`${BASE_URL}/tiposOpes`)
    return {
        type: GET_TIPOS_OPES,
        payload: request
    }
}

export function getCount() {
    const response = axios.get(`${BASE_URL}/opes/count`)
    return {
        type: GET_COUNT,
        payload: response
    }
}

export function updateEfetivoDescricao(value) {

    return {
            type: UPDATE_EFETIVO_DESC,
            payload: value
    }
}

export function updateTipo(value) {

    return {
            type: UPDATE_TIPO,
            payload: value
    }
}

export function updateSugestoes(value) {

    return {
            type: UPDATE_SUGESTOES,
            payload: value
    }
}


export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const valores = {...values,
                        efetivoDescricao: values.efetivoDescricao.toString('html')}
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/opes/${id}`, valores)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(ope) {
    const opeValue = {...ope,
    efetivoDescricao: RichTextEditor.createValueFromString(ope.efetivoDescricao, 'html')}
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('opeForm', opeValue)
    ]
}

export function showDelete(ope) {
    const opeValue = {...ope,
        efetivoDescricao: RichTextEditor.createValueFromString(ope.efetivoDescricao, 'html')}
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('opeForm', opeValue)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        getTiposOpes(),
        initialize('opeForm', INITIAL_VALUES)
    ]
}