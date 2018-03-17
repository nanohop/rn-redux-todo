
export const todoItems = (state) => {
  return state.todos.items
}

export const completedItems = (state) => {
  return state.todos.items.filter(item => {
    return item.completed
  })
}

export const uncompletedItems = (state) => {
  return state.todos.items.filter(item => {
    return !item.completed
  })
}
