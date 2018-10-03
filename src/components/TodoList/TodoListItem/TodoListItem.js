import React from 'react';
import {connect} from 'react-redux';
import { ListItem, ListItemText, ListItemSecondaryAction, withStyles, Checkbox, IconButton } from '@material-ui/core';
import DeleteOutlineSharp from '@material-ui/icons/DeleteOutlineSharp';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
      width: '500px',
      height: '100px',
      backgroundColor: theme.palette.background.paper,
    },
    completed : {
        textDecoration: 'line-through'
    }
  });
  

const TodoListItem = ({todo, classes, removeTodo, completeTodo, history }) => {

    return (
        <ListItem
        button
        dense
        className={todo.completed ? [classes.completed, classes.root].join(' ') : classes.root}
        onClick={() => history.push('/edit/' + todo.id)}
        >
        <Checkbox
        onChange={() => completeTodo(todo.id)}
        disabled={todo.completed}/>
    <ListItemText primary={todo.id + ' : ' + todo.title} />
    <ListItemSecondaryAction>
    <IconButton aria-label='Details' >
        
    </IconButton>
    <IconButton aria-label="Comments">
                  <DeleteOutlineSharp 
                  onClick={() => removeTodo(todo.id)}/>
    </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
    )
};
const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => dispatch({type: 'REMOVE_TODO', todoID: id}),
    completeTodo: (id) => dispatch({type: 'COMPLETE_TODO', todoID: id})
})
export default connect(null, mapDispatchToProps)(withStyles(styles)(withRouter(TodoListItem)));