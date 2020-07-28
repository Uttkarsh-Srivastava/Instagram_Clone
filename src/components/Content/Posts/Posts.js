/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import Post from "./Post";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

export default function Posts({ user }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = db
            .collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => {
                        const date = moment(
                            doc.data().timestamp.toDate()
                        ).fromNow();
                        return {
                            id: doc.id,
                            post: doc.data(),
                            date: date,
                        };
                    })
                );
            });
        return () => {
            unsubscribe();
        };
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {posts.map(({ id, post, date }) => (
                <Post
                    key={id}
                    postId={id}
                    username={post.username}
                    imageUrl={post.imageUrl}
                    caption={post.caption}
                    user={user}
                    date={date}
                />
            ))}
        </div>
    );
}
