/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { db } from "../../../firebase";
import firebase from "firebase";

function AddComment({ postId, user }) {
    const [comment, setComment] = useState("");
    const submitComment = (e) => {
        e.preventDefault();
        if (comment !== "") {
            db.collection("posts").doc(postId).collection("comments").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                text: comment,
                username: user.displayName,
            });
            setComment("");
        }
    };
    return (
        <div>
            <form style={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="caption"
                    autoComplete="off"
                    fullWidth
                    value={comment}
                    placeholder="Add a comment... "
                    onChange={(e) => setComment(e.target.value)}
                    style={{ width: "70%" }}
                />
                <Button variant="text" color="primary" onClick={submitComment}>
                    Post
                </Button>
            </form>
        </div>
    );
}

export default AddComment;
