const initialState = {
  items: [
    {
      "id":1,
      "task":"Learn react",
      "completed":true
    },
    {
      "id":2,
      "task":"Learn redux",
      "completed":false
    },
    {
      "id":3,
      "task":"Make awesome app",
      "completed":false
    }
  ]
}

import { ADD_TODO } from '../actions/types'

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      const newTask = {
        id: new Date().getTime(),
        task: "New Task",
        completed: false
      }

      return {
        ...state,
        items: [
          ...state.items,
          newTask
        ]
      }
  }

  return state
}

export default todos
