import React, { Component } from 'react';
import {connect} from 'react-redux'
import TodoList from '../components/TodoList/TodoList';
import { fetchAllTodos } from '../utils/api';
import {getAllTodos} from '../store/actions/todo';



class App extends Component {
  componentDidMount() {
    fetchAllTodos()
    .then(res => res.json()).then(response => this.props.getTodos(response));
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
  }
}
export default connect(null, mapDispatchToProps)(App);
