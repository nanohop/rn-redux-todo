
import { LOGIN } from '../actions/types'

const auth = (state = { username: null }, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.username
      }
  }

  return state
}

export default auth
