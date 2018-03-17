
import { ADD_TODO } from './types'

export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    task
  }
}
