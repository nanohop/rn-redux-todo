
import { ADD_TODO, SET_TODOS } from './types'

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

export const loadTodos = () => {
  return dispatch => {
    items('GET')
    .then(items => {
      dispatch(setTodos(items))
    })    
  }
}
