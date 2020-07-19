import "./App.css";

import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import { auth } from "./firebase";

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
    return (
        <div className="App">
            <Header user={user} />
            <Posts className="posts" />
        </div>
    );
}

export default App;
