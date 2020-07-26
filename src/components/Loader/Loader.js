import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import "animate.css";

function Loader() {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "Center",
                animation: "zoomIn",
                animationDuration: "1s",
            }}
        >
            <InstagramIcon style={{ fontSize: 72 }} color="primary" />
        </div>
    );
}

export default Loader;
