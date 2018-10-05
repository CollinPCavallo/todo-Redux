import Fetch from 'isomorphic-fetch';

export const fetchAllTodos = () => {
    return Fetch('https://practiceapi.devmountain.com/api/tasks')
}
export const addNewTodo = (title) => {
    return Fetch('https://practiceapi.devmountain.com/api/tasks', {
        method: 'POST',
        body: JSON.stringify({title: title}),
        headers: {"Content-Type" : "application/json"}
    })
}
export const editTodo = (id, edits) => {
    return Fetch('https://practiceapi.devmountain.com/api/tasks/' + id, {
        method: 'PATCH',
        body: JSON.stringify(edits),
        headers: {"Content-Type" : "application/json"}
        
    });
}
export const completeTodo = (id) => {
    return Fetch('https://practiceapi.devmountain.com/api/tasks/' + id, {
        method: 'PUT'
    })
}