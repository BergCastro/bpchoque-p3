import axios from 'axios'
import consts from '../consts'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'




const BASE_URL = consts.API_URL
const INITIAL_VALUES = {efetivoDescricao: ''}

export const GET_COUNT_TIPOS = 'GET_COUNT_TIPOS'
export const GET_TIPOS_OPES = 'GET_TIPOS_OPES'
export const UPDATE_EFETIVO_DESC_TIPO = 'UPDATE_EFETIVO_DESC_TIPO'

export function getList() {
    const request = axios.get(`${BASE_URL}/tiposOpes`)
    return {
        type: GET_TIPOS_OPES,
        payload: request
    }
}

export function getCount() {
    const response = axios.get(`${BASE_URL}/tiposOpes/count`)
    return {
        type: GET_COUNT_TIPOS,
        payload: response
    }
}

export function updateEfetivoDescricao(value) {

    return {
            type: UPDATE_EFETIVO_DESC_TIPO,
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
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/tiposOpes/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(tipoOpe) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('tipoOpeForm', tipoOpe)
    ]
}

export function showDelete(tipoOpe) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('tipoOpeForm', tipoOpe)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('tipoOpeForm', INITIAL_VALUES)
    ]
}