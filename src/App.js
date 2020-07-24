import "./App.css";

import React, { useEffect, useState } from "react";

import Authenticate from "./components/Authentication/Authenticate";
import Header from "./components/Header/Header";
// import ImageUpload from "./components/ImageUpload/ImageUpload";
import { auth } from "./firebase";
import Content from "./components/Content/Content";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                setUser(authUser);
            } else {
                setUser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [user]);
    if (!user) {
        return (
            <div className="Login">
                <Authenticate />
            </div>
        );
    } else {
        return (
            <div className="App">
                <Header user={user} />
                {/* <ImageUpload /> */}
                <Content />
            </div>
        );
    }
}

export default App;
