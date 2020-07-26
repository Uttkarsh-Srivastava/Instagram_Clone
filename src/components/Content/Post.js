import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

import MoreVertIcon from "@material-ui/icons/MoreVert";

import AddComment from "./AddComment";
import CommentDialog from "./CommentDialog";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: "56px",
        minHeight: "50vh",
        height: "auto",
        maxWidth: "700px",
        width: "100%",
        animation: "zoomIn",
        animationDuration: "0.5s",
    },
    media: {
        // 16:9
    },
    img: {
        width: "100%",
        height: "50vh",
        objectFit: "contain",
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
}));

export default function Post({
    postId,
    username,
    imageUrl,
    caption,
    user,
    date,
}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt={username} src="#" className={classes.avatar} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
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
                    <IconButton
                        aria-label="add to favorites"
                        style={{ padding: 0 }}
                    >
                        <FavoriteIcon />
                    </IconButton>
                </div>
                <div className={classes.caption}>
                    <strong>
                        <Typography
                            variant="p"
                            color="textPrimary"
                            component="p"
                            style={{ marginRight: 8 }}
                        >
                            {username}
                        </Typography>
                    </strong>
                    <Typography variant="p" color="textSecondary" component="p">
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
