import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import Post from "./Post";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = db
            .collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data(),
                    }))
                );
            });
        return () => {
            unsubscribe();
        };
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {posts.map(({ id, post }) => (
                <Post
                    key={id}
                    username={post.username}
                    imageUrl={post.imageUrl}
                    caption={post.caption}
                />
            ))}
        </div>
    );
}
