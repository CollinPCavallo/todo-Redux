import actions from '../actions/actionTypes';

export const getTodo = (id) => ({
    type: actions.GET_ALL_TODOS_REQUEST,
    id
});

export const addTodo = (todo) => ({
    type: actions.ADD_TODO_GET_ALL_TODOS_REQUEST,
    todo
});

export const editOneTodo = (id, updates) => ({
    type: actions.EDIT_TODO_GET_ALL_TODOS_REQUEST,
    id,
    updates
});

export const removeTodo = (id) => ({
    type: actions.REMOVE_TODO_GET_ALL_TODOS_REQUEST,
    id
});

export const completeOneTodo = (id) => ({
    type: actions.COMPLETE_TODO_GET_ALL_TODOS_REQUEST,
    id
});

export const getAllTodos = (todos) => ({
    type: actions.GET_ALL_TODOS_REQUEST,
    todos
})