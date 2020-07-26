/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";

import { db } from "../../firebase";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    inputs: {
        width: "100%",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
}));

function getSteps() {
    return ["Select a Photo", "Write a caption "];
}

export default function InputUploadForm({ handleClose, user }) {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleFileUpload = (e) => {
        if (e.target.files[0] != null) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (image !== null && caption !== "") {
            user.updateProfile({ posts: user.posts + 1 });
            const uploadTask = firebase
                .storage()
                .ref(`images/${image.name}`)
                .put(image);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );

                    if (progress === 100) {
                        handleClose();
                    }
                },
                (error) => {
                    alert(error.message);
                },
                () => {
                    firebase
                        .storage()
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((url) => {
                            db.collection("posts").add({
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                caption: caption,
                                imageUrl: url,
                                username: user.displayName,
                            });
                        });

                    setImage(null);
                    setCaption("");
                }
            );
        } else if (image === null) {
            alert("Please select a Photo to upload !");
            setActiveStep(0);
        } else if (caption === "") {
            alert("Provide a caption to your photo");
            setActiveStep(1);
        } else {
            alert("Some error occured. Please try again!");
            handleClose();
        }
    };

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <center>
                            <Input
                                autoFocus
                                margin="dense"
                                id="image"
                                type="file"
                                fullWidth
                                onChange={handleFileUpload}
                                className={classes.inputs}
                            />
                            <Button
                                variant="text"
                                color="primary"
                                onClick={handleNext}
                            >
                                Next
                            </Button>
                        </center>
                    </div>
                );
            case 1:
                return (
                    <center>
                        <Input
                            autoFocus
                            margin="dense"
                            id="caption"
                            label="Caption"
                            placeholder="Add a Caption"
                            type="text"
                            fullWidth
                            onChange={(e) => setCaption(e.target.value)}
                            className={classes.inputs}
                        />
                        <Button
                            variant="text"
                            color="primary"
                            onClick={handleUpload}
                        >
                            Upload
                        </Button>
                    </center>
                );

            default:
                return "Unknown stepIndex";
        }
    }
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                <div>{getStepContent(activeStep)}</div>
            </div>
        </div>
    );
}
