import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { auth } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
});

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onSubmit = () => {
        auth.signInWithEmailAndPassword(email, password).catch((error) =>
            alert(error.message)
        );
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img
                className={classes.logo}
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Instagram"
            />

            <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                id="email "
                label="Email Address"
                type="email"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                id="password"
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
                Sign In
            </Button>
        </div>
    );
}
