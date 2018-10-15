import { URL_PARAMS } from './constants';

const REXP_OP = /[\/+\-*]/;

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

const _randomInt = (maxvalue) => {
    return Math.floor(Math.random() * (maxvalue ? maxvalue : 10));
};

const _randomOperator = () => {
    const operator = '/*-+';
    return operator.charAt(Math.floor(Math.random() * operator.length));
};

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

export const getUserRole = () => {
    const urlParams = getUrlParams();
    return urlParams[URL_PARAMS.USER_ROLE] || null;
};