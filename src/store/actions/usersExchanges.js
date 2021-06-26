import * as fetchTypes from '../constants/usersExchanges'

export function changeExchanges(exchanges) {
  return {
    type: fetchTypes.UPDATE_EXCHANGES,
    exchanges: exchanges
  }
}
