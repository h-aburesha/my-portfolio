import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Projects.css";

// Sample data for projects
const projects = [
    {
        id: 1,
        title: "React Native App - Bold. (UX/UI Design & Development)",
        description:
            "One of my previous UX/UI design bootcamp projects, brought to life with react Native. This app is a fitness tracker that allows users to track macronutrients intake and view their progress over time by the help of scanning the product's barcode with the help of the phone's camera. Additionally, a profile page with ligh and dark theme and a chart page for total macros. The app also allows users to reach their weight goals in a convenient, easy way.",
        imageUrl: "https://via.placeholder.com/200x200",
        linkUrl: "#",
    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a description of Project 2.",
        imageUrl: "https://via.placeholder.com/200x200",
        linkUrl: "#",
    },
    // Add more projects as needed
];

function Projects() {
    // Settings for the React Slick carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const projectsContainer = document.querySelector(
                ".projects-container"
            );
            const projectsContainerPosition = projectsContainer.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const scrollPosition = windowHeight + scrollY;

            if (scrollPosition > projectsContainerPosition && !animate) {
                setAnimate(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [animate]);

    return (
        <div className="projects-all">
            <div className={`projects-container${animate ? " animate" : ""}`}>
                {projects.map((project) => (
                    <div key={project.id} className="project-item">
                        <div className="project-carousel">
                            <Slider {...settings}>
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                />
                                {/* Add more images to carousel as needed */}
                            </Slider>
                        </div>
                        <div className="project-details">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href={project.linkUrl}>Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
