import React from 'react';
import './LoadingPage.css';
import androidIcon from '../public/img/androidlogo.png';
import appleIcon from '../public/img/applelogo.png';
import windowsIcon from '../public/img/windowslogo.png';

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <h1 className="logo">Mouse Mastery</h1>
      <div className="loader book">
        <figure className="page">
          <div className="icon-container">
            <img src={androidIcon} alt="Android Icon" className="icon" />
          </div>
        </figure>
        <figure className="page">
          <div className="icon-container">
            <img src={appleIcon} alt="Apple Icon" className="icon" />
          </div>
        </figure>
        <figure className="page">
          <div className="icon-container">
            <img src={windowsIcon} alt="Windows Icon" className="icon" />
          </div>
        </figure>
      </div>
      <h2>Loading</h2>
    </div>
  );
}

export default LoadingPage;