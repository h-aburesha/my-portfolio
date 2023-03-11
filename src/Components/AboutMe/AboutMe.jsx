import React from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

import "./AboutMe.css";

const AboutMe = () => {
    const moi =
        "https://s3.amazonaws.com/spicedling/qhqGuzBSwezGuczS8deu45mOZs0MxUXo.png";

    return (
        <div className="about-me-container">
            <div className="profile-picture">
                <img src="/me.png" alt="Profile" />
            </div>
            <div className="name">
                <h1> Hi again!</h1>
            </div>
            <div className="about">
                <h2>A little bit about me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce auctor tristique nisi, vel dictum ex efficitur at.
                    Maecenas facilisis ante eget velit finibus ullamcorper. Duis
                    imperdiet non augue non cursus.
                </p>
            </div>
            <div className="approach">
                <h2>My Approach</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce auctor tristique nisi, vel dictum ex efficitur at.
                    Maecenas facilisis ante eget velit finibus ullamcorper. Duis
                    imperdiet non augue non cursus.
                </p>
            </div>
            <div className="icons">
                <a
                    target={"_blank"}
                    href="https://www.linkedin.com/in/haburesha/"
                >
                    <FaLinkedin />
                </a>
                <a target={"_blank"} href="https://github.com/h-aburesha">
                    <FaGithub />
                </a>
                <a href="/your-resume.pdf" download>
                    <FaDownload />
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
