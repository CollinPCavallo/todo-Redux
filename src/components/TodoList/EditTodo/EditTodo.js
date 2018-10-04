import React, { Component } from "react";
import {connect} from 'react-redux';
import { Grid, TextField } from "@material-ui/core";
import ArrowBackSharp from '@material-ui/icons/ArrowBackSharp'

class EditTodo extends Component {
    state={
        title: '',
        description: ''
    }
    handleInputChange = (e) => {
        const {name , value } = e.target;
        console.log(name,value);
        this.setState({ [name]: value });
        this.props.todo[name]= value;
	}
    render() {
        return (
            <div className='Container'>
                <Grid   
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                        <ArrowBackSharp
                        onClick={() => this.props.history.push('/')}
                        />
                        <Grid item xs={12}>
                            <TextField
                            id='editTodo'
                            name='title'
                            label='Title'
                            value={this.props.todo.title}
                            onChange={this.handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                                <TextField
                                name='description'
                                id='editTodo2'
                                label='Description'
                                value={this.props.todo.description}
                                onChange={this.handleInputChange}
                                />
                        </Grid>
                </Grid>
        </div>
        )
    }
};
const mapStateToProps = (state, props) => {
    return {
        todo: state.todos.find(todo => todo.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, null)(EditTodo);