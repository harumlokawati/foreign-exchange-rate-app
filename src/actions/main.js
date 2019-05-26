import * as actions from '../constants/actions';

export function failure(error) {
    return {
        type: actions.FAILURE,
        payload: {error}
    }
}

export function loadRate(symbols, base) {
    return {
        type: actions.LOAD_RATE,
        payload: {symbols, base}
    }
}

export function loadRateSuccess(data) {
    return {
        type: actions.LOAD_RATE_SUCCESS,
        payload: {data}
    }
}

export function setAmount(amount) {
    return {
        type: actions.SET_AMOUNT,
        payload: {amount}
    }
}

export function setBase(base) {
    return {
        type: actions.SET_BASE,
        payload: {base}
    }
}


export function addSymbol(symbol) {
    return {
        type: actions.ADD_SYMBOL,
        payload: {symbol}
    }
}

export function removeSymbol(symbol) {
    return {
        type: actions.REMOVE_SYMBOL,
        payload: {symbol}
    }
}

export function setLoading(loading) {
    return {
        type: actions.SET_LOADING,
        payload: {loading}
    }
}

