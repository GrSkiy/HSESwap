import * as actionTypes from '../constants/filters'

const initialState = {
  cities: [],
  city: {},
  year: 2020
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILTERS:
      console.log('FILTERS Reducer Data GET_FILTERS', action)

      return Object.assign({}, state, {
        cities: action.cities,
        city: action.city,
        years: action.years,
        year: action.year
      })
    case actionTypes.UPDATE_FILTERS:
      console.log('FILTERS Reducer Data UPDATE_FILTERS', action)

      return Object.assign({}, state, {
        city: action.city,
        year: action.year
      })
    default:
      return state
  }
}

export default filters
