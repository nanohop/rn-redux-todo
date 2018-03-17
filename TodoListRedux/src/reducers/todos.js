const initialState = {
  items: []
}

import { ADD_TODO, SET_TODOS } from '../actions/types'

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
  }

  return state
}

export default todos
