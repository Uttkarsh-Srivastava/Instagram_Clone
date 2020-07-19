import React from "react";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SignUp from "./SignUp";

export default function Authenticate({ user }) {
    if (!user) {
        return (
            <div
                style={{
                    display: "flex",
                    width: "150%",
                    padding: "10px",
                    justifyContent: "space-evenly",
                }}
            >
                <SignIn />
                <SignUp />
            </div>
        );
    } else {
        return <SignOut />;
    }
}
