import {takeEvery, call, put} from 'redux-saga/effects';
import actions from '../store/actions/actionTypes'
import api from '../utils/api';

function* getTodosSaga(action) {
    try {
        const isoRes = yield call(api.getAllTodosAPI);
        const todos = yield isoRes.json();
        yield put({ type: actions.GET_ALL_TODOS_SUCCESS, todos: todos});
    }
    catch (err) {
        yield put({type: actions.GET_ALL_TODOS_FAILED, error: err});
    }
}
function* addTodoSaga(action) {
    try {
        const isoRes = yield api.addNewTodo(action.todo);
        const todos = yield isoRes.json();
        yield put ({ type: actions.ADD_TODO_SUCCESS});
        yield put({ type: actions.GET_ALL_TODOS_SUCCESS, todos: todos});    }
    catch (err) {
        yield put({type: actions.ADD_TODO_FAILED, error: err});
    }
}
function* editTodoSaga(action) {
        try {const isoRes = yield api.editTodo(action.id, action.edits);
        const todos = yield isoRes.json();
        yield put ({type: actions.EDIT_TODO_SUCCESS})
        yield put({ type: actions.GET_ALL_TODOS_SUCCESS, todos: todos});    
    }
    catch (err) {
        yield put({type: actions.EDIT_TODO_FAILED, error: err});
    }

}
function* removeTodoSaga(action) {
    try{
        const isoRes = yield api.deleteTodo(action.id);
        const todos = yield isoRes.json();
        yield put ({type: actions.REMOVE_TODO_SUCCESS});
        yield put({ type: actions.GET_ALL_TODOS_SUCCESS, todos: todos});    }
    catch (err) {
        yield put({type: actions.REMOVE_TODO_FAILED, error: err});
    }
}
function* completeTodoSaga(action) {
	try {
            const response = yield api.completeTodo(action.id)
            const todos = yield response.json();
            yield put ({ type: actions.COMPLETE_TODO_SUCCESS });
            yield put({ type: actions.GET_ALL_TODOS_SUCCESS, todos: todos});	}
        catch (err) {
            yield put({type: actions.COMPLETE_TODO_FAILED, error: err});
	}
};

export function* watcherSaga() {
    yield takeEvery(actions.GET_ALL_TODOS_REQUEST, getTodosSaga);
    yield takeEvery(actions.ADD_TODO_REQUEST, addTodoSaga);
    yield takeEvery(actions.REMOVE_TODO_REQUEST, removeTodoSaga);
    yield takeEvery(actions.EDIT_TODO_REQUEST, editTodoSaga);
    yield takeEvery(actions.COMPLETE_TODO_REQUEST, completeTodoSaga);
}