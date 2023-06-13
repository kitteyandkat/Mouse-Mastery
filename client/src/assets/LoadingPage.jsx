import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LoadingPage.css';
import androidIcon from './images/androidlogo.png';
import appleIcon from './images/applelogo.png';
import windowsIcon from './images/windowslogo.png';

const LoadingPage = () => {
  const [showNextComponent, setShowNextComponent] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    const delay = 3000; // 3 seconds delay
    const timeoutId = setTimeout(() => {
      setShowNextComponent(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const navigateToNextPage = () => {
    history.push('/home'); // Replace '/home' with the desired path of the next page
  };

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
      {showNextComponent && (
        <button onClick={navigateToNextPage}>Continue</button>
        // Replace the button with your desired next component or navigation method
      )}
    </div>
  );
}

export default LoadingPage;