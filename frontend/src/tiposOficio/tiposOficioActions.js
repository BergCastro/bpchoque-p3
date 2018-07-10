import axios from 'axios'
import consts from '../consts'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'


const BASE_URL = consts.API_URL
const INITIAL_VALUES = {conteudo: ''}

export const GET_COUNT_TIPOS = 'GET_COUNT_TIPOS'
export const GET_TIPOS_OFICIO = 'GET_TIPOS_OFICIO'
export const UPDATE_CONTEUDO_TIPO = 'UPDATE_CONTEUDO_TIPO'


export function getList() {
    const request = axios.get(`${BASE_URL}/tiposOficio`)
    return {
        type: GET_TIPOS_OFICIO,
        payload: request
    }
}

export function getCount() {
    const response = axios.get(`${BASE_URL}/tiposOficio/count`)
    return {
        type: GET_COUNT_TIPOS,
        payload: response
    }
}

export function updateConteudo(value) {

    return {
            type: UPDATE_CONTEUDO_TIPO,
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
        axios[method](`${BASE_URL}/tiposOficio/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(tiposOficio) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('tiposOficioForm', tiposOficio)
    ]
}

export function showDelete(tiposOficio) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('tiposOficioForm', tiposOficio)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('tiposOficioForm', INITIAL_VALUES)
    ]
}