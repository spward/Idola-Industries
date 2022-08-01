import React from "react";
import ReactPlayer from "react-player";
import IdolaVideo from "./idola.mp4";

export const Hero = () => {
  return (
    <div className="hero" id="#about">
      <div className="player-wrapper">
        <ReactPlayer
          url={IdolaVideo}
          className="react-player"
          controls
          volume={0.5}
        />
        <h3>
          Your future
          <br /> is in our hands
        </h3>
      </div>
    </div>
  );
};
