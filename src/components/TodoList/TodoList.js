import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, List, Paper, withStyles, Button } from '@material-ui/core/';
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
    container : {
        width: '100%',
        maxWidth: '360px',
        margin: '20px auto',
        backgroundColor: 'rgb(209, 209, 209)',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '20px',
    }
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
            <div className={classes.container}>
            <Grid container spacing={24}>
            <Grid item xs={12}>
            {this.props.error ? 
                <div>
                    <h3>Something Went Wrong:   {this.props.error}</h3>
                    <Button
                        variant='contained'
                        size='small'
                        color='secondary'
                        onClick={() => window.location.reload()}> 
                    Go Back</Button>
                </div>: 
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
                </Paper>}
            </Grid>
            
            
          </Grid>
        </div>
        )
    }
}
    
const mapStateToProps = state => {
 return {
     todos: state.todos.todos,
     error: state.errors.error
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