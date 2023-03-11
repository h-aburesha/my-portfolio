import React from "react";

import VideoLogo from "../VideoLogo/VideoLogo";
import "./Landing.css";

function Landing() {
    return (
        <>
            <div className="landing-container">
                <div className="navigation-bar">
                    <VideoLogo />
                    <button>See my work</button>
                    <button>About me</button>
                    <button>Contact</button>
                </div>
                <nav className="navbar">
                    {/* <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link> */}
                </nav>
                <header className="header">
                    <h1 className="header-text">
                        Hello, I am Hassan and I am a mixture of WebDev, UX/UI &
                        8 years professional in business development!
                    </h1>
                </header>
                <div className="navigation-list-home">
                    <ul>
                        <li>See my work → </li>
                        <li>Read about my approach → </li>
                        <li>Contact me → </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Landing;
