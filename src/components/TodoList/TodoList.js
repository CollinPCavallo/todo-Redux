import React, { Component } from 'react';
import './TodoList.css'
import { connect } from 'react-redux';
import { Grid, List, Paper, withStyles } from '@material-ui/core/';
import { withRouter } from 'react-router-dom';

import TodoListItem from './TodoListItem/TodoListItem';
import NewTodo from './NewTodo/NewTodo';
import { addTodo } from '../../store/actions/todo';

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
                                todo={todo} />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(TodoList)));