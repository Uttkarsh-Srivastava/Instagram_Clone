import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Posts from "./Posts";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        paddingTop: "8vh",
        paddingBottom: "8vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#ffffff ",
        zIndex: "1",
    },
    item: {
        position: "relative",
        borderRight: "solid lightgray 0.2px",
        borderLeft: "solid lightgray 0.2px",
        zIndex: "3",
    },
});

export default function Content({ user }) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} md={5} className={classes.item}>
                <Posts user={user} />
            </Grid>
        </Grid>
    );
}
