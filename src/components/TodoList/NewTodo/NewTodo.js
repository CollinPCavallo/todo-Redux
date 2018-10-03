import React, {Component} from 'react';
import { TextField, withStyles, Grid } from '@material-ui/core';


class NewTodo extends Component {
    
    state = {
        title: ''
    }
    onChangeHandler = e => {
        this.setState({title: e.target.value})
    }
    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <TextField 
                    id='newTodo'
                    label='New Todo'
                    onChange={this.onChangeHandler}
                    value={this.state.title}
                    />
                    <button
                    onClick={() => this.props.clicked(this.state.title)}
                    >Submit</button>
                </Grid>
            </Grid>
        )
    }
}


export default NewTodo;