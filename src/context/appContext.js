import { createContext } from 'react'

const data = {
  device_token: '',
  authenticity_token: '',
  loading: true
}

const AppContext = createContext(data)

export { AppContext }
