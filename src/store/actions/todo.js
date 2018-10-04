import * as actions from './actionTypes';

export const getTodo = (id) => ({
    type: actions.GET_TODO,
    id
});

export const addTodo = (title) => ({
    type: actions.ADD_TODO,
    title
});

export const editTodo = (id, updates) => ({
    type: actions.EDIT_TODO,
    id,
    updates
});

export const removeTodo = (id) => ({
    type: actions.REMOVE_TODO,
    id
});

export const completeTodo = (id) => ({
    type: actions.COMPLETE_TODO,
    id
});

export const getAllTodos = () => ({
    type: actions.GET_ALL_TODOS
})