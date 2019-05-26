import { fromJS } from "immutable";

export const initialState = fromJS({
    app:{
            base: 'USD',
            amount: 10,
            symbols: [],
            rates: {},
            error: '',
            loading: false
        }
    }
);