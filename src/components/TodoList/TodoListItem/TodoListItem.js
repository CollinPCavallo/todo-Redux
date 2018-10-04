import React from 'react';
import {connect} from 'react-redux';
import { ListItem, ListItemText, ListItemSecondaryAction, withStyles, Checkbox, IconButton } from '@material-ui/core';
import DeleteOutlineSharp from '@material-ui/icons/DeleteOutlineSharp';
import { withRouter } from 'react-router-dom';
import {removeTodo, completeTodo } from '../../../store/actions/todo'

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
  

const TodoListItem = ({todo, classes, removeTodo, completeTodo, history}) => {

    return (
        <ListItem
        button
        dense
        className={todo.completed ? [classes.completed, classes.root].join(' ') : classes.root}
        onClick={() => history.push('/edit/' + todo.id)}
        >
    <ListItemText primary={todo.id + ' : ' + todo.title} />
    <ListItemSecondaryAction>
        <Checkbox
        style={{tabIndex: '-1'}}
        onChange={() => completeTodo(todo.id)}
        disabled={todo.completed}/>
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
    removeTodo: (id) => dispatch(removeTodo(id)),
    completeTodo: (id) => dispatch(completeTodo(id))
})
export default connect(null, mapDispatchToProps)(withStyles(styles)(withRouter(TodoListItem)));