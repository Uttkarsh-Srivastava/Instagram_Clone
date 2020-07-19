import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div className="App">
            <Header />
            <Posts className="posts" />
        </div>
    );
}

export default App;
