import logo from "./logo.svg";

import Landing from "./Components/Landing/Landing";
import "./App.css";
import "./Components/AboutMe/AboutMe";
import React from "react";
import AboutMe from "./Components/AboutMe/AboutMe";

function App() {
    return (
        <>
            <Landing />
            <AboutMe />
        </>
    );
}

export default App;
