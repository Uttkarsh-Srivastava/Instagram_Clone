import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import SignOut from "../Authentication/SignOut";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
    },
    logo: {
        objectFit: "contain",
        paddingLeft: "60px",
    },
    signOutButton: {
        paddingRight: "60px",
    },
}));

export default function Header({ user }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logo}>
                        <img
                            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                            alt="Instagram"
                        />
                    </div>
                    <div className={classes.signOutButton}>
                        <SignOut user={user} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
