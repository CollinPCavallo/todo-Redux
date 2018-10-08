import React, { Component } from "react";
import {connect} from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import {getAllTodos} from "../store/actions/todo";
class App extends Component {
	componentDidMount() {
		this.props.getTodos();
	}
	render() {
		return (
			<div className="App">
				<TodoList />
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getTodos: (todos) => dispatch(getAllTodos(todos))
	};
};
export default connect(null, mapDispatchToProps)(App);
