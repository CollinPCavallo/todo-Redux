import actions from '../actions/actionTypes'

const initState = {
  todos: []
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_ALL_TODOS_SUCCESS :
      return {
        ...state,
        todos: action.todos
      }
    case actions.EDIT_TODO : {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) { return { ...todo, ...action.edits } } return todo
        }) }
    }
    default:
      return state
  }
}
export default todoReducer
