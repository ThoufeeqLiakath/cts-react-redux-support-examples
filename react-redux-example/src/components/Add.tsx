import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { v1 as uuidv1 } from "uuid";
import { connect } from 'react-redux';
import { addItem } from "../redux/actions";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Add(props: any) {
    const classes = useStyles();
    const [item, setItem] = useState('');
    const onSubmitClickHandler=(e: any)=>{
        e.preventDefault();
        const newItem ={
            id: uuidv1(),
            item
        }
        props.addItem(newItem);
    }
    return (
        <form onSubmit={onSubmitClickHandler} className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Enter Item..." onChange={(e: any) => setItem(e.target.value)} />
            <Button type="submit" variant="contained" color="primary" >Add Item</Button>
        </form>
    );
}
const mapStateToProps = (state: any) => ({
    todoList: state.todoList
});

export default connect(mapStateToProps, {addItem})(Add);