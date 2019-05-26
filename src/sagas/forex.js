import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as actions from '../constants/actions';
import { failure, loadRateSuccess, setLoading } from '../actions/main';
import { fetchExchangeRateData } from '../api/forex';

function* loadRateSaga(request) {
    try {
        const {payload: {symbols, base}} = request
        let i = 0;
        let s = ''
        while (i < symbols.length){
            s += symbols[i]
            i++;
            if(i < symbols.length){
                s += ','
            }
        }
        yield put(setLoading(true))
        const res = yield call(fetchExchangeRateData, s, base);
        yield put(loadRateSuccess(res));
        yield put(setLoading(false))
    } catch (err) {
        yield put(failure(err));
    }
}

function* forex() {
    yield all([
        takeLatest(actions.LOAD_RATE, loadRateSaga)
    ])
}

export default forex;