
import { combineReducers } from 'redux'

import todos from './todos'

export default combineReducers({
  todos
})

// {
//   todos: {
  //   items: [
  //     {
  //       "id":1,
  //       "task":"Learn react",
  //       "completed":true
  //     },
  //     {
  //       "id":2,
  //       "task":"Learn redux",
  //       "completed":false
  //     },
  //     {
  //       "id":3,
  //       "task":"Make awesome app",
  //       "completed":false
  //     }
  //   ]
  // }
// }
