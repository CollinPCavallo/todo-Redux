import actions from "../actions/actionTypes";

const initState = {
  error: ""
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_ALL_TODOS_FAILED:
      return {
        error: `${action.error.message}  Failed Trying: ${
          actions.GET_ALL_TODOS_FAILED
        }`
      };
    case actions.ADD_TODO_FAILED:
      return {
        error: `${action.error.message}   Failed Trying: ${
          actions.ADD_TODO_FAILED
        }`
      };
    case actions.EDIT_TODO_FAILED:
      return {
        error: `${action.error.message}   Failed Trying: ${
          actions.EDIT_TODO_FAILED
        }`
      };
    case actions.COMPLETE_TODO_FAILED:
      return {
        error: `${action.error.message}   Failed Trying: ${
          actions.COMPLETE_TODO_FAILED
        }`
      };
    case actions.REMOVE_TODO_FAILED:
      return {
        error: `${action.error.message}   Failed Trying: ${
          actions.REMOVE_TODO_FAILED
        }`
      };
    default:
      return state;
  }
};
export default errorReducer;
