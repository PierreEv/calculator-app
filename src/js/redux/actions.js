import { ADD_TEXT, CLEAR_TEXT, COMPUTE_TEXT } from "./action-types";

export const addText = text => ({ type: ADD_TEXT, payload: text });
export const clearText = () => ({ type: CLEAR_TEXT });
export const computeText = () => ({ type: COMPUTE_TEXT });