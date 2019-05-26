import forexReducers from '../../src/reducers/forex';
import * as Actions from '../../src/constants/actions';

describe('forex_reducer', () => {
    describe('INITIAL_STATE', () => {
        test('is correct', () => {
            const action = { type: 'dummy_action' };

            expect(forexReducers(undefined, action)).toMatchSnapshot()
        });
    });

    describe('SET_LOADING', () => {
        test('returns the correct state', () => {
            const action = { type: Actions.SET_LOADING, payload: {loading:true }};

            expect(forexReducers(undefined, action)).toMatchSnapshot()
        });
    });

    describe('LOAD_RATE_SUCCESS', () => {
        test('returns the correct state', () => {
            const action = { type: Actions.LOAD_RATE_SUCCESS, payload: {"data":{"base":"EUR","rates":{"USD":1.1187,"GBP":0.88318},"date":"2019-05-24"}} };


            expect(forexReducers(undefined, action)).toMatchSnapshot();
        });
    });

    describe('SET_AMOUNT', () => {
        test('returns the correct state', () => {
            const action = { type: Actions.SET_AMOUNT, payload: {amount:105} };

            expect(forexReducers(undefined, action)).toMatchSnapshot();
        });
    });

    describe('ADD_SYMBOL', () => {
        test('returns the correct state', () => {
            const action = { type: Actions.ADD_SYMBOL, payload: {symbol:'EUR'} };

            expect(forexReducers(undefined, action)).toMatchSnapshot();
        });
    });

    describe('REMOVE_SYMBOL', () => {
        test('returns the correct state', () => {
            const action = { type: Actions.REMOVE_SYMBOL, payload: {symbol:'IDR'} };
            const initial = {
                base: 'USD',
                amount: 105,
                symbols: ['EUR', 'IDR'],
                rates: {},
                error: '',
                loading: false
            }

            expect(forexReducers(initial, action)).toMatchSnapshot();
        });
    });

    describe('SET_BASE', () => {
        test('returns the correct state', () => {
            const action = { type: Actions.SET_BASE, payload: {base:'JPY'} };

            expect(forexReducers(undefined, action)).toMatchSnapshot();
        });
    });
});
