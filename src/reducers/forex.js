import * as actions from '../constants/actions';
import {initialState} from '../constants/state';

const forexState = initialState.get('app')

const forexReducers = (state = forexState, action) => {
    const {payload = {}} = action
    switch (action.type) {
        case actions.FAILURE:
            return {
                ...state,
                ...{error: payload.error}
            };
        case actions.LOAD_RATE_SUCCESS:
            return {
                ...state,
                ...{rates: payload.data.rates}
            };
        case actions.SET_AMOUNT:
            return {
                ...state,
                ...{amount: payload.amount}
            };
        case actions.REMOVE_SYMBOL:
            let removed = state.symbols.filter(e => e !== payload.symbol)
            return {
                ...state,
                ...{symbols: removed}
            };
        case actions.ADD_SYMBOL:
            let added = state.symbols.concat([payload.symbol])
            return {
                ...state,
                ...{symbols: added}
            };
        case actions.SET_BASE:
            return {
                ...state,
                ...{base: payload.base}
            };
        default: return state
    }
}

export default forexReducers;