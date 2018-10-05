

const initState = {
    todos: []
};

const todoReducer = (state = initState, action) => {
    switch (action.type) {
            case 'GET_ALL_TODOS' :
            return {
                ...state,
                todos: action.todos
            } 

            case 'ADD_TODO' : {
            return {
                ...state,
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
                    todos: state.map((todo) => {
                        if(todo.id === action.id){return {...todo,...action.updates}}return todo;})};
            }
            default:
                return state
    }

}
export default todoReducer;