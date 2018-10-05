import actions from '../actions/actionTypes'

const initState = {
    todos: []
};

const todoReducer = (state = initState, action) => {
    switch (action.type) {
            case actions.GET_ALL_TODOS_SUCCESS :
            return {
                ...state,
                todos: action.todos
            } 

            case actions.ADD_TODO_SUCCESS : {
            return {
                ...state,
            }
        }
            case actions.REMOVE_TODO_SUCCESS :
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
            case actions.COMPLETE_TODO_SUCCESS:
                return {
                    ...state,
                    todos: state.todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
                }
            case actions.EDIT_TODO_SUCCESS : {
                return {
                    ...state,
                    todos: state.map((todo) => {
                        if(todo.id === action.id){return {...todo,...action.updates}}return todo;})};
            }
            default:
                return state
    }

}
export default todoReducer;