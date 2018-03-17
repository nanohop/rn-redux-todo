const initialState = {
  items: [],
  loading: false
}

import { 
  ADD_TODO, 
  SET_TODOS,
  TODOS_LOADING,
  TODOS_LOADED
} from '../actions/types'

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          action.task
        ]
      }

    case SET_TODOS:
      return {
        ...state,
        items: action.items
      }

    case TODOS_LOADING:
      return {
        ...state,
        loading: true
      }

    case TODOS_LOADED:
      return {
        ...state,
        loading: false
      }
  }

  return state
}

export default todos
