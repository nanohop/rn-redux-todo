
import { ADD_TODO, SET_TODOS } from './types'

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
