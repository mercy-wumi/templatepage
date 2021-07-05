import axios from 'axios';
import {
    FETCH_TEMPLATE_ERROR,
    FETCH_TEMPLATE_REQUEST,
    FETCH_TEMPLATE_SUCCESS,
    // FILTERED_CATEGORY,
    // FILTER_HANDLER
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

// const categoryFilter = (filteredCategory) => {
//     return {
//         type: FILTERED_CATEGORY,
//         payload: filteredCategory
//     }
// }

// export const filterHandler = (category) => {
//     return {
//         type: FILTER_HANDLER,
//         payload: category,
//     }
// }

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
            .then(resp => {
                const allTemplates = resp.data;
                console.log(allTemplates);
                dispatch(fetchSuccess(allTemplates))
                // dispatch(storeCategory(allTemplates.category))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchError(errorMsg))
            })
    }
}

// export const categoryFilter = (filteredCategory, template, category) => {
//     return (dispatch) => {
//         switch (category) {
//             case "health":
//                 filteredCategory(template.filter((filteredTemplate) =>
//                 filteredTemplate.health === true));
//                 break;
//             case "education":
//                 filteredCategory(template.filter((filteredTemplate) =>
//                 filteredTemplate.education === true));
//                 break;
//             case "ecommerce":
//                 filteredCategory(template.filter((filteredTemplate) =>
//                 filteredTemplate.ecommerce === true));
//                 break;
//             default:
//                 filteredCategory(template);
//         }
//     }
// }