import * as url from '../constants/api'
import axios from 'axios'

export function fetchExchangeRateData(symbols, base) {
    return axios.get(url.GET_LATEST_RATE,
        {
            params: {
                symbols: symbols,
                base: base
            }
        }
    )
        .then(res => {
            return Promise.resolve(res.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}