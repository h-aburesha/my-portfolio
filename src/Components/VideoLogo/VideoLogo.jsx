import React from "react";

function VideoLogo() {
    return (
        <video
            className="video-logo"
            width={"150px"}
            height={"150px"}
            autoPlay
            loop
            muted
        >
            <source src="logovid.mp4" type="video/mp4" />
        </video>
    );
}

export default VideoLogo;
