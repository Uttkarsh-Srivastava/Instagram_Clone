import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardMedia from "@material-ui/core/CardMedia";

import { Avatar } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
    root: {
        minWidth: "350px",
        height: "80vh",
        width: "90%",
        maxWidth: "700px",
        marginTop: "48px",
    },
    title: {
        fontSize: 18,
    },
    image: {
        width: "100%",
        // height: "100px",
        objectFit: "contain", // 16:9
    },
    avatar: {
        backgroundColor: "#3f51b5",
    },
    content: {
        padding: "20px",
    },
});

export default function Post({ username, imageUrl, caption }) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar alt={username} src="#" className={classes.avatar} />
                }
                title={username}
            ></CardHeader>
            <div>
                <img src={imageUrl} alt="" className={classes.image} />
            </div>
            <div className={classes.content}>
                <span>
                    <strong>{username} : </strong> {caption}
                </span>
            </div>
        </Card>
    );
}
