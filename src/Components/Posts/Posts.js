import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./Posts.css";

import Post from "../Post/Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    post: doc.data(),
                }))
            );
        });
    }, []);
    return (
        <div className="container">
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
