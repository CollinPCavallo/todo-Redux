import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  withStyles,
  Checkbox,
  IconButton,
  Grid
} from '@material-ui/core' // eslint-disable-line no-unused-vars
import DeleteOutlineSharp from '@material-ui/icons/DeleteOutlineSharp' // eslint-disable-line no-unused-vars
import { withRouter } from 'react-router-dom'
import { removeTodo, completeOneTodo } from '../../../store/actions/todo'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100px',
    backgroundColor: theme.palette.background.paper
  },
  completed: {
    textDecoration: 'line-through'
  }
})

const TodoListItem = ({
  todo,
  classes,
  removeTodo,
  completeTodo,
  history,
  clicked,
  complete,
  remove
}) => {
  return (
    <Grid item xs={12}>

      <Grid container alignContent='center' justify='center' spacing={24}>
        <Grid item xs={12}>
          <ListItem
            button
            dense
            className={todo.completed
              ? [classes.completed, classes.root].join(' ')
              : classes.root}
            onClick={() => history.push('/edit/' + todo.id)}>
            <ListItemText primary={todo.id + ' : ' + todo.title} />
            <ListItemSecondaryAction>
              <Checkbox
                style={{
                  tabIndex: '-1'
                }}
                onChange={complete}
                checked={todo.completed}
                disabled={todo.completed} />
              <IconButton aria-label="Delete">
                <DeleteOutlineSharp onClick={remove} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

        </Grid>
      </Grid>

    </Grid>
  )
}
const mapDispatchToProps = dispatch => ({
  removeTodo: (id) => dispatch(removeTodo(id)),
  completeTodo: (id) => dispatch(completeOneTodo(id))
})
export default connect(null, mapDispatchToProps)(withStyles(styles)(withRouter(TodoListItem)))
