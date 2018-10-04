import * as actions from '../actions/todo' 

const initState = {
    todos: []
};

const todoReducer = (state = initState, action) => {
    switch (action.type) {
            case 'ADD_TODO' : {
            const newArray = {
                title: action.title,
                id: Math.random().toFixed(3),
                completed: false
            }
            return {
                ...state,
                todos: state.todos.concat(newArray),
            }
        }
            case 'REMOVE_TODO' :
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
            case 'COMPLETE_TODO':
                return {
                    ...state,
                    todos: state.todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
                }
            case 'EDIT_TODO' : {
                return {
                    ...state,
                    todos: state.todos.map(todo=> todo.id === action.id ? {...todo, description: action.updates} : todo)
                }
            }
            default:
                return state
    }

}
export default todoReducer;