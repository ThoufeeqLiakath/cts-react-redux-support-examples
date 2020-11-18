import React, { useEffect } from 'react'
import { makeStyles, Grid } from '@material-ui/core';
import { connect } from "react-redux";
import { getItems } from "../redux/actions";
import ToDoItem from './ToDoItem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexgrow: 1,
        marginTop: "10px"
    },
    todoList: {
        padding: "10px 10px"
    }
}));

function Dashboard(props: any) {
    const classes = useStyles();
    useEffect(() => {
        props.getItems();
    });
    return (
        <div className={classes.root}>
            <Grid container className={classes.todoList}>
                {props.todoList.map((todoItem: any) => <ToDoItem key={todoItem.id} id={todoItem.id} itemName={todoItem.item} />)}
            </Grid>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    todoList: state.todoList
});

export default connect(mapStateToProps, { getItems })(Dashboard);