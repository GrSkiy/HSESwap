import * as actionTypes from '../constants/exchangeMinors'

export function updateExchangeMinors(data) {
  return {
    type: actionTypes.UPDATE_EXCHANGE_MINORS,
    exchangeMinors: data.exchange_minors
  }
}
