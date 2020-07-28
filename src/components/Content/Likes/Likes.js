/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { db } from "../../../firebase";

function AddLikes({ postId, user, isLiked, likes }) {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("likes")
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    if (doc.id === user.email) {
                        setLiked(true);
                    }
                    return null;
                });
            });

        return () => {
            unsubscribe();
        };
    }, [liked]);

    const handleLike = () => {
        setLiked(true);

        db.collection("posts")
            .doc(postId)
            .collection("likes")
            .doc(user.email)
            .set({ username: user.email });
    };
    const handleUnlike = () => {
        setLiked(false);

        db.collection("posts")
            .doc(postId)
            .collection("likes")
            .doc(user.email)
            .delete();
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 8 }}>
                {liked ? (
                    <FavoriteIcon onClick={handleUnlike} color="secondary" />
                ) : (
                    <FavoriteIcon onClick={handleLike} color="disabled" />
                )}
            </div>
            {likes === 1 ? (
                <strong>
                    <p>{likes} Like</p>
                </strong>
            ) : likes > 1 ? (
                <strong>
                    <p>{likes} Likes</p>
                </strong>
            ) : null}
        </div>
    );
}

export default AddLikes;
