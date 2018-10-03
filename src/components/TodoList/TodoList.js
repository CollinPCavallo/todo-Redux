import React, { Component } from 'react';
import './TodoList.css'
import { connect } from 'react-redux';
import { Grid, List } from '@material-ui/core/';
import { withRouter } from 'react-router-dom';

import TodoListItem from './TodoListItem/TodoListItem';
import NewTodo from './NewTodo/NewTodo';
class TodoList extends Component {
    render() {
        return (
            <div className='Container'>
            <Grid   
                container
                direction="column"
                justify="center"
                alignItems="center">
                <Grid item xs={12}>
                    <NewTodo clicked={this.props.onAddTodo}/>
                </Grid>
                <Grid item xs={12}>
                    <List>
                        {this.props.todos.map(todo => 
                            <TodoListItem 
                                key={todo.id} 
                                todo={todo} />
                        )}
                    </List>
                </Grid>
            </Grid>
        </div>
        )
    }
}
    
const mapStateToProps = state => {
 return {
     todos: state.todos
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (title) => dispatch({type: 'ADD_TODO', todoData: {title}}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoList));