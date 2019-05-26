import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';
import rootReducers from '../reducers';
import { initialState } from '../constants/state';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

function initStore (preloadState = initialState) {
    console.log(preloadState)
    const store = createStore(
        rootReducers,
        preloadState,
        applyMiddleware(sagaMiddleware)
    )

    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

export default initStore