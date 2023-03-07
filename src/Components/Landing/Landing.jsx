import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
    return (
        <div className="landing-container">
            <nav className="navbar">
                {/* <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link> */}
            </nav>
            <header className="header">
                <h1 className="header-text">
                    Hello, I am Hassan and I am a mixture of WebDev, UX/UI & 8
                    years professional in business development!
                </h1>
            </header>
            <div className="navigation-list-home">
                <ul>
                    <li>See my work → </li>
                    <li>Read about my rapproach → </li>
                    <li>Let's talk → </li>
                </ul>
            </div>
        </div>
    );
}

export default Landing;
