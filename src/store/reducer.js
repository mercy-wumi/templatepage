import {
    FETCH_TEMPLATE_ERROR,
    FETCH_TEMPLATE_REQUEST,
    FETCH_TEMPLATE_SUCCESS,
    FILTERED_CATEGORY,
    FILTER_HANDLER
} from './actionTypes'

const initialState = {
    loading: true,
    template: [],
    error: '',
    filteredCategory: [],
    category: 'all'
    // currentPage: 1,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEMPLATE_REQUEST:
            return {
                ...state,
                loading: false
            };
        case FETCH_TEMPLATE_SUCCESS:
            return {
                loading: false,
                template: action.payload,
                error: ''
            };
        case FILTERED_CATEGORY:
            return {
                loading: false,
                filteredCategory: action.payload,
                error: ''
            };
        case FILTER_HANDLER:
            return {
                loading: false,
                category: action.payload,
                error: ''
            };
        case FETCH_TEMPLATE_ERROR:
            return {
                loading: false,
                template: [],
                error: action.payload
            };
        default:
            return state
    };
}

export default reducer;
