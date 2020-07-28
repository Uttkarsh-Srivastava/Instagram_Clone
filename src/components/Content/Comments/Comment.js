import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Card, CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import DeleteComment from "./DeleteComment";

import { db } from "../../../firebase";

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginBottom: 24,
        heigh: "auto",
    },
    avatar: {
        backgroundColor: "#3f51b5",
    },
}));
function Comment({ postId, commentId, text, username, date }) {
    const classes = useStyle();

    const handleDelete = () => {
        db.collection("posts")
            .doc(postId)
            .collection("comments")
            .doc(commentId)
            .delete();
    };
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt={username} src="#" className={classes.avatar} />
                }
                action={<DeleteComment handleDelete={handleDelete} />}
                title={username}
                subheader={date}
            />
            <CardContent>
                <Typography variant="p" color="textSecondary" component="p">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Comment;
