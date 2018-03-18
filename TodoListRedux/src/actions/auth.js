
import { LOGIN } from './types'

export const login = (username) => {
  return {
    type: LOGIN,
    username
  }
}
