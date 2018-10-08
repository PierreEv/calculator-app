const regExp_OP = /[\/\+\-\*]/;

export const computeValue = (text) => {
    if (!text){
        return null;
    }

    const numbers = text.split(regExp_OP);
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