import { all, fork } from 'redux-saga/effects';
import forex from './forex';

function* rootSaga() {
    yield all([
        fork(forex),
    ])
}

export default rootSaga;