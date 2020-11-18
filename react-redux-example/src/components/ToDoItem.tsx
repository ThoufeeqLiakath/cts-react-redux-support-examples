import React from 'react'
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear";
import { connect } from 'react-redux';
import { deleteItem } from "../redux/actions";
const useStyles = makeStyles((theme) => ({
    root: {
        flexgrow: 1,
        marginRight: "10px",
        marginBottom: "10px",
    },
    pos: {
        float: "right",
        cursor: "pointer"
    }
}));
function ToDoItem(this: any, props: any) {
    const onDeleteClickHandler = (id: any) => {
        props.deleteItem(id);
    }
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.itemName}<ClearIcon onClick={onDeleteClickHandler.bind(this, props.id)} color="secondary" className={classes.pos} />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
const mapStateToProps = (state: any) => ({
    todoList: state.todoList
});

export default connect(mapStateToProps, {deleteItem})(ToDoItem);