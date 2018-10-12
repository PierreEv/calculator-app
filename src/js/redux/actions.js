import { ADD_TEXT, CLEAR_TEXT, COMPUTE_TEXT, RANDOM_TEXT } from "./action-types";

export const addText = text => ({ type: ADD_TEXT, text: text });
export const clearText = () => ({ type: CLEAR_TEXT });
export const computeText = () => ({ type: COMPUTE_TEXT });
export const randomText = () => ({ type: RANDOM_TEXT });