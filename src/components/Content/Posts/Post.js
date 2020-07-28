import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import DeletePost from "./DeletePost";
import AddComment from "../Comments/AddComment";
import CommentDialog from "../Comments/CommentDialog";
import AddLikes from "../Likes/Likes";

import { db } from "../../../firebase";
import "animate.css";

const useStyles = makeStyles({
    root: {
        paddingBottom: "56px",
        minHeight: "50vh",
        height: "auto",
        maxWidth: "700px",
        width: "100%",
        animation: "zoomIn",
        animationDuration: "0.8s",
        marginBottom: 36,
    },

    img: {
        objectFit: "contain",
        width: "100%",
        height: "50vh",
        animation: "zoomIn",
        animationDuration: "0.8s",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 24px",
        width: "100%",
    },

    avatar: {
        backgroundColor: "#3f51b5",
    },
    caption: {
        display: "flex",
        alignItems: "center",
        marginBottom: "24px",
    },
    likeButton: {
        margin: "24px 0",
    },
    viewComment: {
        marginBottom: "12px ",
    },
});

export default function Post({
    postId,
    username,
    imageUrl,
    caption,
    user,
    date,
}) {
    const classes = useStyles();
    const liked = useRef(false);

    const [likes, setLikes] = useState(0);

    useEffect(() => {
        const unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("likes")
            .onSnapshot((snapshot) => {
                setLikes(snapshot.docs.length);
                return null;
            });
        return () => {
            unsubscribe();
        };
    }, []);

    const handleDelete = () => {
        db.collection("posts").doc(postId).delete();
    };
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt={username} src="#" className={classes.avatar} />
                }
                action={<DeletePost handleDelete={handleDelete} />}
                title={username}
                subheader={date}
            />
            <div className={classes.media}>
                <img
                    className={classes.img}
                    src={imageUrl}
                    alt="Sorry! Error Occurred"
                />
            </div>

            <CardContent className={classes.content}>
                <div className={classes.likeButton}>
                    <AddLikes
                        postId={postId}
                        user={user}
                        isLiked={liked.current}
                        likes={likes}
                    />
                </div>
                <div className={classes.caption}>
                    <strong>
                        <Typography
                            variant="body1"
                            color="textPrimary"
                            component="p"
                            style={{ marginRight: 8 }}
                        >
                            {username}
                        </Typography>
                    </strong>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                    >
                        {caption}
                    </Typography>
                </div>
                <div className={classes.viewComment}>
                    <CommentDialog postId={postId} />
                </div>
                <div className={classes.addComment}>
                    <AddComment postId={postId} user={user} />
                </div>
            </CardContent>
        </Card>
    );
}
