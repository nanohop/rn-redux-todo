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

const todos = (state = initialState, action) => {
  console.log("Action: ", action)
  return state
}

export default todos
