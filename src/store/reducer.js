import {
    FETCH_TEMPLATE_ERROR,
    FETCH_TEMPLATE_REQUEST,
    FETCH_TEMPLATE_SUCCESS
} from './actionTypes'

const initialState = {
    loading: true,
    template: [],
    error: '',
    // currentPage: 1,

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
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
