import React, { Component } from 'react';
import './TodoList.css'
import { connect } from 'react-redux';
import { Grid, List, Paper, withStyles } from '@material-ui/core/';
import { withRouter } from 'react-router-dom';
import TodoListItem from './TodoListItem/TodoListItem';
import NewTodo from './NewTodo/NewTodo';
import { addTodo, getAllTodos, completeOneTodo, removeTodo} from '../../store/actions/todo';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class TodoList extends Component {
    onCompleteHandler = id => {
        this.props.onCompleteTodo(id)
        this.props.history.push('/')
    }
    onRemoveHandler = id => {
        this.props.onDeleteTodo(id);
        this.props.history.push('/')
    }
    render() {
        const {classes} = this.props
        return (
            <div className='Container'>
            <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                 <NewTodo clicked={this.props.onAddTodo}/>
                 <List>
                        {this.props.todos.map(todo => 
                            <TodoListItem 
                                key={todo.id} 
                                todo={todo} 
                                remove={() => this.onRemoveHandler(todo.id)}
                                complete={() => this.onCompleteHandler(todo.id)}/>
                        )}
                    </List>
              </Paper>
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
        onAddTodo: (title) => dispatch(addTodo(title)),
        getTodos: (todos) => dispatch(getAllTodos(todos)),
        onDeleteTodo: (id) => dispatch(removeTodo(id)),
        onCompleteTodo: (id) => dispatch(completeOneTodo(id)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(TodoList)));