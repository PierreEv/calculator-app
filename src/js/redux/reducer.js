import { ADD_TEXT, CLEAR_TEXT, COMPUTE_TEXT, RANDOM_TEXT } from "./action-types";
import { computeValue, randomText } from "../utils"

const initialState = {
    text: '',
    value: null
};

const setText = (state, action, value) => {
    switch (action.type) {
        case ADD_TEXT:
            const baseText = value !== null ? '' : '' + state;
            return baseText + action.text;

        case RANDOM_TEXT: 
            return randomText();
        
        case CLEAR_TEXT:
            return '';
        
        default:
            return state;
    }
};

const setValue = (state, action, text) => {
    switch (action.type) {
        case ADD_TEXT:
        case CLEAR_TEXT:
            return null;
        
        case COMPUTE_TEXT:            
            return computeValue(text);

        default:
            return state;
    }
};

const reducer = (state = initialState, action) => {
    return {
        text: setText(state.text, action, state.value),
        value: setValue(state.value, action, state.text)
    }
};



export default reducer;