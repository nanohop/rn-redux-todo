
import { 
  SET_TODOS,
  TODOS_LOADING,
  TODOS_LOADED,
  TODO_ERROR,
  TODO_VALIDATION_ERROR
} from './types'

import { items } from '../lib/api'

export const addTodo = (task) => {
  return dispatch => {
    items('POST', { task })
    .then(items => {
      dispatch(setTodos(items))
    })
    .catch(error => {
      dispatch(showError(error))
    })
  }
}

export const showError = (error) => {
  return {
    type: TODO_ERROR,
    error
  }
}

export const validationError = error => {
  return {
    type: 'TODO_VALIDATION_ERROR',
    error
  }
}

export const toggleTodo = (id, completed) => {
  return dispatch => {
    items('PUT', { id, completed })
    .then(items => {
      dispatch(setTodos(items))
    })
  }
}

export const deleteTodo = (id) => {
  return dispatch => {
    items('DELETE', { id })
    .then(items => {
      dispatch(setTodos(items))
    })
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
  return (dispatch, getState) => {
    const state = getState()

    if(state.todos.loading) {
      console.warn("Already Loading")
      return;
    }

    console.warn("Load from server")
    dispatch(todosLoading())
    items('GET')
    .then(items => {
      dispatch(todosLoaded())
      dispatch(setTodos(items))
    })    
  }
}
