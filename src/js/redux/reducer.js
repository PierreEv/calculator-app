import { ADD_TEXT, CLEAR_TEXT, COMPUTE_TEXT, RANDOM_TEXT, SET_FILTER } from "./action-types";
import { computeValue, randomText } from "../utils"

const initialState = {
    history: [],
    filter: '',
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

const setHistory = (state, action, text, value) => {
    switch (action.type) {
        case COMPUTE_TEXT:            
            return state.concat({
                text: text,
                value: value
            });
            
        default:
            return state;
    }
};

const setFilter = (state, action) => {
    switch (action.type) {
        case SET_FILTER:            
            return action.filter;
            
        default:
            return state;
    }
};

const reducer = (state = initialState, action) => {
    const newText = setText(state.text, action, state.value),
        newValue = setValue(state.value, action, state.text),
        newFilter = setFilter(state.filter, action);

    const newHistory = setHistory(state.history, action, newText, newValue);

    return {
        text: newText,
        value: newValue,
        history: newHistory,
        filter: newFilter
    }
};

export default reducer;