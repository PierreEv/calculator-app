import { ADD_TEXT, CLEAR_TEXT, COMPUTE_TEXT } from "./action-types";

const initialState = {
    text: '',
    value: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return Object.assign({}, state, {
                text: '' + state.text + action.payload 
            });

        case CLEAR_TEXT:
            return Object.assign({}, state, initialState);
        
        case COMPUTE_TEXT:
            return Object.assign({}, state, {
                value: eval(state.text) 
            });

        default:
            return state;
    }
};

export default reducer;