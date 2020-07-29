import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { db } from "../../../firebase";
import Comment from "./Comment";
import moment from "moment";

export default function CommentDialog({ postId, user }) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setComments(
                    snapshot.docs.map((doc) => {
                        const date = moment(
                            doc.data().timestamp.toDate()
                        ).fromNow();
                        return {
                            id: doc.id,
                            comment: doc.data(),
                            date: date,
                        };
                    })
                );
            });
        return () => {
            unsubscribe();
        };
    }, [postId]);

    const descriptionElementRef = React.useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            {comments.length > 0 ? (
                <Button
                    onClick={handleClickOpen("body")}
                    style={{ padding: "0" }}
                >
                    View {comments.length} Comments
                </Button>
            ) : null}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogContent dividers={scroll === "body"}>
                    <DialogTitle id="scroll-dialog-title">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <h2 style={{ color: "#3f51b5" }}>Comments</h2>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {comments.map(({ id, comment, date }) => (
                            <Comment
                                key={id}
                                postId={postId}
                                commentId={id}
                                text={comment.text}
                                username={comment.username}
                                isAuthenticated={
                                    comment.commentedBy === user.email
                                }
                                date={date}
                            />
                        ))}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
