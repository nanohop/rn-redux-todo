const initialState = {
  items: [],
  loading: false,
  error: null,
  validation_error: null
}

import { 
  ADD_TODO, 
  SET_TODOS,
  TODOS_LOADING,
  TODOS_LOADED,
  TODO_ERROR,
  TODO_VALIDATION_ERROR
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

    case TODO_ERROR:
      return {
        ...state,
        error: action.error
      }

    case TODO_VALIDATION_ERROR:
      return {
        ...state,
        validation_error: action.error
      }
  }

  return state
}

export default todos
