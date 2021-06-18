import axios from 'axios';
import {
    FETCH_TEMPLATE_ERROR,
    FETCH_TEMPLATE_REQUEST,
    FETCH_TEMPLATE_SUCCESS
} from './actionTypes'

const fetchRequest = () => {
    return {
        type: FETCH_TEMPLATE_REQUEST
    }
}

const fetchSuccess = (template) => {
    return {
        type: FETCH_TEMPLATE_SUCCESS,
        payload: template
    }
}

const fetchError = (error) => {
    return {
        type: FETCH_TEMPLATE_ERROR,
        payload: error
    }
}

export const fetchTemplates = () => {
    return (dispatch) => {
        dispatch(fetchRequest)
        axios.get('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates')
            .then( resp => {
                const allTemplates = resp.data;
                dispatch(fetchSuccess(allTemplates))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchError(errorMsg))
            })
    }
}