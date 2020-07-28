import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import ImageUpload from "./AddImage/ImageUpload";
const useStyles = makeStyles({
    appBar: {
        top: "auto",
        bottom: 0,
    },
    toolbar: {
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
    },
});

export default function BottomAppBar({ user }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <ImageUpload user={user} />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
