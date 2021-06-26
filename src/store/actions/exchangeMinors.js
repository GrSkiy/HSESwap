import * as actionTypes from '../constants/exchangeMinors'

export function updateExchangeMinors(exchange_minors) {
  return {
    type: actionTypes.UPDATE_EXCHANGE_MINORS,
    exchangeMinors: exchange_minors
  }
}
