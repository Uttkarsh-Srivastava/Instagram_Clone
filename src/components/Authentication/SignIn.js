import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { auth } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import firebase from "firebase/app";

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

    // const signInWithFacebook = () => {
    //     const provider = new firebase.auth.FacebookAuthProvider();
    //     auth.signInWithRedirect(provider);
    //     auth.getRedirectResult()
    //         .then(function (result) {
    //             if (result.credential) {
    //                 // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //                 var token = result.credential.accessToken;
    //                 // ...
    //             }
    //             // The signed-in user info.
    //             var user = result.user;
    //             console.log(user);
    //         })
    //         .catch(function (error) {
    //             // Handle Errors here.
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             // The email of the user's account used.
    //             var email = error.email;
    //             // The firebase.auth.AuthCredential type that was used.
    //             var credential = error.credential;
    //             // ...
    //         });
    // };

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
            <center>
                <Button
                    type="submit"
                    onClick={onSubmit}
                    color="primary"
                    className={classes.button}
                >
                    Sign In
                </Button>
            </center>

            {/* <Button variant="contained" onClick={signInWithFacebook}>
                <FacebookIcon /> <span> Continue With Facebook</span>
            </Button> */}
        </div>
    );
}
