import { createContext } from 'react'

const data = {
  devise_token: '',
  authenticity_token: '',
  loading: true
}

const AppContext = createContext(data)

export { AppContext }
