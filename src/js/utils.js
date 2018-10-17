import { URL_PARAMS } from './constants';

const REXP_OP = /[\/+\-*]/;

/**
 * Computes the value of TEXT.
 *
 * @public
 * @param {string} text the operation to compute
 * @returns {number} result of text computation (null if text is empty , or 'error' if eval failed)
 */
export const computeValue = (text) => {
    if (!text) {
        return null;
    }

    const numbers = text.split(REXP_OP);
    let hasError = false;
    for (let i = 0; i < numbers.length; i++) {
        const n = numbers[i];
        if (!n // prevent double operator
            || isNaN(n) // prevent double dot
            || (n.length > 1 && n.charAt(0) === '0' && n.charAt(1) !== '.') // prevent Octal error
        ) {
            hasError = true;
            break;
        }
    }

    return hasError ? 'error' : eval(text);
};

/**
 * Generates a random integer between 0 and maxValue ([0-maxValue[).
 *
 * @private
 * @param {number} maxValue
 * @returns {number} a random number
 */
const _randomInt = (maxValue = 10) => {
    return Math.floor(Math.random() * maxValue);
};

/**
 * Generates a random operator.
 *
 * @private
 * @returns {string} a random operator
 */
const _randomOperator = () => {
    const operator = '/*-+';
    return operator.charAt(Math.floor(Math.random() * operator.length));
};

/**
 * Generates a random operation.
 *
 * @public
 * @returns {string} a random operation
 */
export const randomText = () => {
    const maxLoop = _randomInt();
    const maxNumber = 10000;
    let text = '';
    for (let i = 0; i < maxLoop; i++) {
        text += '' + _randomInt(maxNumber) + '' + _randomOperator();
    }
    
    text += '' + _randomInt(maxNumber);

    return text;
};

/**
 * Get URL parameters as map.
 *
 * @public
 * @returns {Object} map of url parameters (ex: { param_name: param_value })
 */
export const getUrlParams = () => {
    var params = {};

    var query = document.location.hash;
    if (!query || query === '') {
        query = document.location.search;
    }
    
    query.split('&').forEach(function (part) {
        var item = part.split('=');
        var paramName = item[0];
        if (paramName.charAt(0) === '?') {
            paramName = paramName.substring(1);
        }
        params[paramName] = decodeURIComponent(item[1]);
    });

    return params;
};

/**
 * Get current user role from url.
 *
 * @public
 * @returns {string} user role value
 */
export const getUserRole = () => {
    const urlParams = getUrlParams();
    return urlParams[URL_PARAMS.USER_ROLE] || null;
};