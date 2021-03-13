import * as actionTypes from '../constants/filters'

export function getFilters(data) {
  return {
    type: actionTypes.GET_FILTERS,
    cities: data.cities,
    city: data.city,
    years: data.years,
    year: data.year
  }
}

export function updateFilters(data) {
  return {
    type: actionTypes.UPDATE_FILTERS,
    city: data.city,
    year: data.year
  }
}
