import React, { Component } from "react";
import { Grid, TextField } from "@material-ui/core";
import ArrowBackSharp from '@material-ui/icons/ArrowBackSharp'

class EditTodo extends Component {
    state={
        title: '',
        description: ''
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
                            label='Title'
                            />
                        </Grid>
                        <Grid item xs={12}>
                                <TextField
                                id='editTodo2'
                                label='Description'
                                />
                        </Grid>
                </Grid>
        </div>
        )
    }
};

export default EditTodo;