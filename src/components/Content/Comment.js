import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Card, CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        animation: "zoomIn",
        animationDuration: "0.5s",
        marginBottom: 24,
    },
    avatar: {
        backgroundColor: "#3f51b5",
    },
}));
function Comment({ text, username, date }) {
    const classes = useStyle();
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
            <CardContent>
                <Typography variant="p" color="textSecondary" component="p">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Comment;
