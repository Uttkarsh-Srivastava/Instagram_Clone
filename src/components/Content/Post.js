/* eslint-disable react/prop-types */
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: "350px",
        height: "80vh",
        width: "90%",
        maxWidth: "700px",
        marginTop: "24px",
        marginBottom: "24px",
    },
    title: {
        fontSize: 18,
    },
    image: {
        width: "100%",
        height: "50vh",
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
    if (imageUrl !== null && username !== "" && caption !== "") {
        return (
            <Card className={classes.root} variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar
                            alt={username}
                            src="#"
                            className={classes.avatar}
                        />
                    }
                    title={username}
                ></CardHeader>
                <div>
                    <img
                        src={imageUrl}
                        alt="error occured"
                        className={classes.image}
                    />
                </div>
                <div className={classes.content}>
                    <span>
                        <strong>{username} : </strong> {caption}
                    </span>
                </div>
            </Card>
        );
    } else return null;
}
