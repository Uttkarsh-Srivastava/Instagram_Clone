import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Menu from "./Menu";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "24px",
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
        paddingLeft: "auto",
    },
    signOutButton: {
        paddingRight: "auto",
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
                        <Menu user={user} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
