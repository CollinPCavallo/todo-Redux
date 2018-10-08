import Fetch from "isomorphic-fetch";

const getAllTodosAPI = () => {
	return Fetch("https://practiceapi.devmountain.com/api/tasks");
};
const addNewTodo = (title) => {
	return Fetch("https://practiceapi.devmountain.com/api/tasks", {
		method: "POST",
		body: JSON.stringify({title: title}),
		headers: {"Content-Type" : "application/json"}
	});
};
const editTodo = (id, edits) => {
	return Fetch("https://practiceapi.devmountain.com/api/tasks/" + id, {
		method: "PATCH",
		body: JSON.stringify(edits),
		headers: {"Content-Type" : "application/json"}
        
	});
};
const completeTodo = (id) => {
	return Fetch("https://practiceapi.devmountain.com/api/tasks/" + id, {
		method: "PUT"
	});
};
const deleteTodo = (id) => {
	return Fetch("https://practiceapi.devmountain.com/api/tasks/" + id, {
		method: "DELETE"
	});
};
export default { getAllTodosAPI, addNewTodo, editTodo, completeTodo, deleteTodo };