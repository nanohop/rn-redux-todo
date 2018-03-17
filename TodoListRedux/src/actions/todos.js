
import { 
  ADD_TODO, 
  SET_TODOS,
  TODOS_LOADING,
  TODOS_LOADED
} from './types'

import { items } from '../lib/api'

export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    task
  }
}

export const setTodos = (items) => {
  return {
    type: SET_TODOS,
    items
  }
}

export const todosLoading = () => {
  return {
    type: TODOS_LOADING
  }
}

export const todosLoaded = () => {
  return {
    type: TODOS_LOADED
  }
}

export const loadTodos = () => {
  return dispatch => {
    dispatch(todosLoading())
    items('GET')
    .then(items => {
      setTimeout(() => {
        dispatch(todosLoaded())
        dispatch(setTodos(items))
      }, 1000)
    })    
  }
}
