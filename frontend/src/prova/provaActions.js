import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {list:[]}

export const GET_PROVAS = 'GET_PROVAS'

export function getList() {
    const request = axios.get(`${BASE_URL}/provas`)
    return {
        type: GET_PROVAS,
        payload: request
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
        axios[method](`${BASE_URL}/provas/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(prova) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('provaForm', prova)
    ]
}

export function showDelete(prova) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('provaForm', prova)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('provaForm', INITIAL_VALUES)
    ]
}