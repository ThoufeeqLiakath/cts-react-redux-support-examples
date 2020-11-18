import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0
    },
    title: {
        textAlign: "center",
        flexGrow: 1,
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Copyright &copy; Stackroute 2020
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
