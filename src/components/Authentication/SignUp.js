import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { auth } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
    },
    textField: {
        width: "50%",
        margin: "12px",
    },
    button: {
        margin: "12px",
    },
    logo: {
        objectFit: "contain",
        margin: "12px",
    },
    message: {
        fontSize: "17px",
        fontWeight: "600",
        lineHeight: "20px",
        textAlign: "center",
        margin: "12px",
        color: "gray",
    },
});

export default function SignUp() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: username,
                });
            })
            .catch((error) => alert(error.message));
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <img
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Instagram"
                />
            </div>
            <Typography>
                <h2 className={classes.message}>
                    <span>Sign up to see photos and</span>
                    <br />
                    <span>videos from your friends.</span>
                </h2>
            </Typography>
            <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                id="name"
                label="Username"
                type="text"
                fullWidth
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                type="submit"
                onClick={onSubmit}
                color="primary"
                className={classes.button}
            >
                Sign Up
            </Button>
        </div>
    );
}
