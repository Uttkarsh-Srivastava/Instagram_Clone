import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Posts from "./Posts/Posts";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        position: "relative",
        top: "64px",
        display: "flex",
        justifyContent: "center",
    },
    posts: {
        // border: "solid black 1px",
    },
});

export default function Content() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} md={5} className={classes.posts}>
                <Posts />
            </Grid>
        </Grid>
    );
}
