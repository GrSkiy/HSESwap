import { createContext } from 'react'

export let data = {
  authenticity_token: null,
  pageState: null,
  getRequest: null,
  loading: true
}

export const AppContext = createContext()
