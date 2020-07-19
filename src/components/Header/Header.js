import "./Header.css";

import Authenticate from "../Authentication/Authenticate";
import React from "react";

export default function Header({ user }) {
    return (
        <div className="header">
            <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Instagram"
            />
            <div className="authenticate">
                <Authenticate user={user} />
            </div>
        </div>
    );
}
