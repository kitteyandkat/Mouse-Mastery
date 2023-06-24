import React from "react";
import "./LandingPage.css";
import mousePic from "../images/mouse-pic.png";

const LandingPage = ({handleStart}) => {
  return (
    <div className="landing-page">
      <img src={mousePic} alt="Mouse Pic" className="mouse-outline"/>
      <div className="logo-container">
        <h1 className="logo-mouse">mouse</h1>
        <h1 className="logo-mastery">Mastery</h1>
      </div>
      <p className="description">Mouse Mastery is your guide to navigating modern technology with ease. Whether you're using an Android device, iPhone, Windows PC, or macOS, our app empowers beginners to explore and master their operating systems. With step-by-step tutorials, intuitive interfaces, and personalized support, Mouse Mastery is your trusted companion on the journey to tech proficiency. Start your digital adventure today and unlock the full potential of your device.</p>
      <button className="start-button" onClick={handleStart}>Start YEERRR</button>
    </div>
  );
};

export default LandingPage;