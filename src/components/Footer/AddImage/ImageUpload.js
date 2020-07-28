import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "animate.css";

import InputUploadForm from "./ImageUploadForm";

export default function FormDialog({ user }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab
                size="medium"
                color="primary"
                aria-label="add"
                onClick={handleClickOpen}
            >
                <AddIcon />
            </Fab>
            <Dialog
                style={{ animation: "zoomIn", animationDuration: "0.4s" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Upload a Photo</DialogTitle>
                <DialogContent
                    style={{
                        width: "350px",
                        height: "270px",
                        // animation: "zoomIn",
                        // animationDuration: "0.3s",
                    }}
                >
                    <InputUploadForm handleClose={handleClose} user={user} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
