

const initState = {
    todos: []
};

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_TODO' : {
            return {
                
            }
        }
        case 'ADD_TODO' : {
            const newArray = {
                title: action.todoData.title,
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
                todos: state.todos.filter(todo => todo.id !== action.todoID)
            }
            case 'COMPLETE_TODO':
                return {
                    ...state,
                    todos: state.todos.map(todo => todo.id === action.todoID ? {...todo, completed: !todo.completed} : todo)
                }
            default:
                return state
    }

}
export default todoReducer;