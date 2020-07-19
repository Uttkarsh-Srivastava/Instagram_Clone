import React from "react";
import "./Header.css";
import SignIn from "../SignIn/SignIn";

export default function Header() {
    return (
        <div className="header">
            <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Instagram"
            />
            <div className="signIn">
                <SignIn />
            </div>
        </div>
    );
}
