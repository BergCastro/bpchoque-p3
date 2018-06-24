import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'




const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {efetivoDescricao: ''}

export const GET_COUNT_TIPOS = 'GET_COUNT_TIPOS'
export const GET_ASSUNTOS_OFICIOS = 'GET_ASSUNTOS_OFICIOS'


export function getList() {
    const request = axios.get(`${BASE_URL}/oficioAssuntos`)
    return {
        type: GET_ASSUNTOS_OFICIOS,
        payload: request
    }
}

export function getCount() {
    const response = axios.get(`${BASE_URL}/oficioAssuntos/count`)
    return {
        type: GET_COUNT_TIPOS,
        payload: response
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
        axios[method](`${BASE_URL}/oficioAssuntos/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(oficioAssuntos) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('oficioAssuntosForm', oficioAssuntos)
    ]
}

export function showDelete(oficioAssuntos) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('oficioAssuntosForm', oficioAssuntos)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('oficioAssuntosForm', INITIAL_VALUES)
    ]
}