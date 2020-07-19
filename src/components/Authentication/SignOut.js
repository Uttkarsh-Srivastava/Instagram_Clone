import { Button } from "@material-ui/core";
import React from "react";
import { auth } from "../../firebase";

export default function SignOut() {
    return (
        <Button
            variant="outlined"
            color="primary"
            onClick={() => auth.signOut()}
        >
            Log Out
        </Button>
    );
}
