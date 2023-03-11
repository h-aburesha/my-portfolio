import logo from "./logo.svg";

import Landing from "./Components/Landing/Landing";
import "./App.css";
import "./Components/AboutMe/AboutMe";
import React from "react";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";

function App() {
    return (
        <>
            <Landing />
            <AboutMe />
            <Projects />
        </>
    );
}

export default App;
