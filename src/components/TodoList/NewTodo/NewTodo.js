import React, {Component} from 'react';
import {connect} from 'react-redux';
import { TextField, Grid, Button } from '@material-ui/core';
import {addTodo, getAllTodos} from '../../../store/actions/todo'


class NewTodo extends Component {
    
    state = {
        title: "",
		description: "",
		completed: false
    }
    onChangeHandler = e => {
        this.setState({title: e.target.value})
    }

    handleSubmit = () => {
        this.props.onAddTodo(this.state.title);
        this.setState({title: ''})
    }
    render() {
        let errorMessage = this.state.title.length < 1 ? <p>Please Enter A title</p> : null;

        return (
            <Grid container justify='center' alignContent='center' spacing={24}>
                <Grid item xs={12}>
                    <TextField 
                    id='newTodo'
                    label='New Todo'
                    onChange={this.onChangeHandler}
                    value={this.state.title}
                    />
                    {errorMessage}
                    </Grid>
                    <Grid item xs={12}>
                    <Button 
                        onClick={this.handleSubmit}
                        variant='contained'
                        disabled={this.state.title.length < 1}
                        color='primary' >Add Todo</Button>
                    </Grid>
                    
                
            </Grid>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (todo) => dispatch(addTodo(todo)),
        getTodos: (todos) => dispatch(getAllTodos(todos))
    }
}

export default connect(null, mapDispatchToProps)(NewTodo);