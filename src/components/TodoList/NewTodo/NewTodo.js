import React, {Component} from 'react';
import { TextField, Grid, Button } from '@material-ui/core';


class NewTodo extends Component {
    
    state = {
        title: ''
    }
    onChangeHandler = e => {
        this.setState({title: e.target.value})
    }

    handleSubmit = () => {
        this.props.clicked(this.state.title)
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


export default NewTodo;