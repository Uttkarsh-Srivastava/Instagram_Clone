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
    },
});

export default function Content() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} md={5} className={classes.item}>
                <Posts />
            </Grid>
        </Grid>
    );
}
