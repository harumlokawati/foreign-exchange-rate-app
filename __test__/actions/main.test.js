import configureStore from 'redux-mock-store';
import * as mainAction from '../../src/actions/main'

const mockStore = configureStore();
const store = mockStore();

describe('main actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions()
    })

    describe('load rate', () => {
        test('Dispatches the correct action and payload', () => {
            store.dispatch(mainAction.loadRate(['EUR'], 'USD'))
            expect(store.getActions()).toMatchSnapshot()
        })
    })

    describe('load rate success', () => {
        test('Dispatches the correct action and payload', () => {
            store.dispatch(mainAction.loadRateSuccess({
                "base": "EUR",
                "rates": {"USD": 1.1187, "GBP": 0.88318},
                "date": "2019-05-24"
            }))
            expect(store.getActions()).toMatchSnapshot()
        })
    })

    describe('set amount', () => {
        test('Dispatches the correct action and payload', () => {
            store.dispatch(mainAction.setAmount(105))
            expect(store.getActions()).toMatchSnapshot()
        })
    })

    describe('set base', () => {
        test('Dispatches the correct action and payload', () => {
            store.dispatch(mainAction.setBase('EUR'))
            expect(store.getActions()).toMatchSnapshot()
        })
    })

    describe('set add symbol', () => {
        test('Dispatches the correct action and payload', () => {
            store.dispatch(mainAction.addSymbol('IDR'))
            expect(store.getActions()).toMatchSnapshot()
        })
    })

    describe('set remove symbol', () => {
        test('Dispatches the correct action and payload', () => {
            store.dispatch(mainAction.removeSymbol('IDR'))
            expect(store.getActions()).toMatchSnapshot()
        })
    })


    describe('set loading', () => {
        test('Dispatches the correct action and payload', () => {
            store.dispatch(mainAction.setLoading(true))
            expect(store.getActions()).toMatchSnapshot()
        })
    })


})