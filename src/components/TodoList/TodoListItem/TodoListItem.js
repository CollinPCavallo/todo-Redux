import React from 'react';
import {connect} from 'react-redux';
import { ListItem, ListItemText, ListItemSecondaryAction, withStyles, Checkbox, IconButton, Grid } from '@material-ui/core';
import DeleteOutlineSharp from '@material-ui/icons/DeleteOutlineSharp';
import { withRouter } from 'react-router-dom';
import {removeTodo, completeTodo } from '../../../store/actions/todo'

const styles = theme => ({
    root: {
      width: '100%',
      height: '100px',
      backgroundColor: theme.palette.background.paper,
    },
    completed : {
        textDecoration: 'line-through'
    }
  });
  

const TodoListItem = ({todo, classes, removeTodo, completeTodo, history}) => {

    return (
        <Grid item xs={12}>
        
            <Grid container alignContent='center' justify='center' spacing={24}>
                <Grid item xs={12}>
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
                        checked={todo.completed}
                        disabled={todo.completed}/>
            <IconButton aria-label="Delete">
                          <DeleteOutlineSharp 
                          onClick={() => removeTodo(todo.id)}/>
            </IconButton>
            </ListItemSecondaryAction>
            </ListItem>
                        
                </Grid>
            </Grid>   
            
        
    </Grid>
    )
};
const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => dispatch(removeTodo(id)),
    completeTodo: (id) => dispatch(completeTodo(id))
})
export default connect(null, mapDispatchToProps)(withStyles(styles)(withRouter(TodoListItem)));