import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { auth } from "../../firebase";

export default function SignIn() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch((error) =>
            alert(error.message)
        );
        handleClose();
    };

    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Sign In
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Sign In with your email and password
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit" onClick={onSubmit} color="primary">
                        Sign In
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
