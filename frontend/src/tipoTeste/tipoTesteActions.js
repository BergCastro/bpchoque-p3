import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {provas:[]}

export const GET_TIPOS = 'GET_TIPOS'


export function getList() {
    const request = axios.get(`${BASE_URL}/tiposTeste`)
    return {
        type: GET_TIPOS,
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function updateProvas(values) {
    return dispatch => {
        const id = values._id
        axios.put(`${BASE_URL}/tiposTeste/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(showUpdate(values))
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/tiposTeste/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(tipoTeste) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('tipoTesteForm', tipoTeste)
    ]
}

export function showDelete(tipoTeste) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('tipoTesteForm', tipoTeste)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('tipoTesteForm', INITIAL_VALUES)
    ]
}