import * as actions from './actionTypes';

export const getTodo = (id) => ({
    type: actions.GET_TODO,
    id
});

export const addTodo = (todo) => ({
    type: actions.ADD_TODO,
    todo
});

export const editOneTodo = (id, updates) => ({
    type: actions.EDIT_TODO,
    id,
    updates
});

export const removeTodo = (id) => ({
    type: actions.REMOVE_TODO,
    id
});

export const completeOneTodo = (id) => ({
    type: actions.COMPLETE_TODO,
    id
});

export const getAllTodos = (todos) => ({
    type: actions.GET_ALL_TODOS,
    todos
})