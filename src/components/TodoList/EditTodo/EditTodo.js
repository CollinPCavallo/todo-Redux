import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Paper, TextField, Button, withStyles } from "@material-ui/core";
import ArrowBackSharp from "@material-ui/icons/ArrowBackSharp";
import green from "@material-ui/core/colors/green";
import {
  removeTodo,
  getAllTodos,
  completeOneTodo,
  editOneTodo
} from "../../../store/actions/todo";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 360
  },
  container: {
    width: "100%",
    maxWidth: "360px",
    margin: "20px auto",
    backgroundColor: "rgb(209, 209, 209)",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #ccc",
    padding: "20px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    alignContent: "center",
    color: theme.palette.text.secondary
  },
  cssRoot: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
});
class EditTodo extends Component {
  state = {
    title: "",
    description: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.todo[name] = value;
  };
  onCancelHandler = () => {
    const { todo, initialData } = this.props;
    this.setState({
      ...this.props.initialData
    });
    todo.title = initialData.title;
    todo.description = initialData.description;
  };

  onSaveHandler = () => {
    const { title, description, completed, id } = this.props.todo;
    let updatedTodo = {
      title,
      description,
      completed
    };
    this.props.onEditTodo(id, updatedTodo);
    this.props.history.push("/");
  };
  onCompleteHandler = id => {
    this.props.onCompleteTodo(id);
    this.props.history.push("/");
  };
  onRemoveHandler = id => {
    this.props.onDeleteTodo(id);
    this.props.history.push("/");
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid
                  container
                  alignContent="center"
                  justify="center"
                  spacing={24}
                >
                  <Grid item xs={12}>
                    <Button onClick={() => this.props.history.push("/")}>
                      <ArrowBackSharp />
                      <h5>Back To Todos</h5>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="editTitle"
                      name="title"
                      label="Title"
                      value={this.props.todo.title}
                      onChange={this.handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="description"
                      id="editDescription"
                      label="Description"
                      value={this.props.todo.description}
                      onChange={this.handleInputChange}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      disabled={this.props.todo.completed}
                      className={classes.cssRoot}
                      onClick={() => this.onCompleteHandler(this.props.todo.id)}
                    >
                      Complete
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      size="small"
                      color="default"
                      onClick={this.onCancelHandler}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      onClick={() => this.onRemoveHandler(this.props.todo.id)}
                    >
                      Delete
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={this.onSaveHandler}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const loadedTodo = state.todos.todos.find(
    todo => todo.id === +props.match.params.id
  );
  const initData = {
    title: loadedTodo.title,
    description: loadedTodo.description
  };
  return { initialData: initData, todo: loadedTodo };
};
const mapDispatchToProps = dispatch => {
  return {
    onEditTodo: (id, edits) => dispatch(editOneTodo(id, edits)),
    onCompleteTodo: id => dispatch(completeOneTodo(id)),
    onDeleteTodo: id => dispatch(removeTodo(id)),
    getTodos: todos => dispatch(getAllTodos(todos))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditTodo));
