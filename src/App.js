import "./App.css";

import React, { useEffect, useState } from "react";

import Authenticate from "./components/Authentication/Authenticate";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { auth } from "./firebase";
import Loader from "./components/Loader/Loader";

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                setUser(authUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, [user]);

    if (loading) {
        return <Loader />;
    } else {
        if (user) {
            return (
                <div className="App">
                    <Header user={user} />
                    <Content user={user} />
                    <Footer user={user} />
                </div>
            );
        } else {
            return (
                <div className="Login">
                    <Authenticate />
                </div>
            );
        }
    }
}

export default App;
