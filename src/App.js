import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Posts from "./Components/Posts/Posts";

function App() {
    return (
        <div className="App">
            <Header />
            <Posts className="posts" />
        </div>
    );
}

export default App;
