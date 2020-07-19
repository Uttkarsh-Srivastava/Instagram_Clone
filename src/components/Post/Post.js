import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

export default function Post({ username, imageUrl, caption }) {
    return (
        <div className="card">
            <header>
                <Avatar alt={username} src="#" className="card__avatar" />
                <h3>{username}</h3>
            </header>
            <div className="card__image">
                <img src={imageUrl} alt="Content could not be loaded" />
            </div>
            <div className="card__content">
                <article>
                    <span>
                        <strong>{username}: </strong> {caption}
                    </span>
                </article>
            </div>
        </div>
    );
}
