import { combineReducers } from 'redux';
import forexReducers from './forex';

const rootReducer = combineReducers({
    app: forexReducers,
});

export default rootReducer;