import React, { useState, useEffect } from 'react';
import LoadingPage from './LoadingPage';
import LandingPage from './LandingPage';
import SelectionPage from './SelectionPage';
import Windows11 from './assets/Windows/Windows';
import PixelClone from './assets/Android/Pixel';
import Mac from './assets/Mac/src/Mac';
import IOSClone from './assets/iOS/ios';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showStartPage, setShowStartPage] = useState(true);
  const [showSelectionPage, setShowSelectionPage] = useState(false);
  const [platform, setPlatform] = useState('windows');

  const updatePlatform = (e) => setPlatform(e.target.dataset.platform);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const handleStart = () => {
    setShowStartPage(false);
    setShowSelectionPage(true);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (showStartPage) {
    return <LandingPage onStart={handleStart} />;
  }

  if (showSelectionPage) {
    return <SelectionPage />;
  }

  return (
    <div className="main-container">
      <div className="tutorial-container">
        <div className="platform-buttons">
          <button
            data-active={platform === 'mac'}
            onClick={updatePlatform}
            data-platform="mac"
          >
            MAC
          </button>
          <button
            data-active={platform === 'windows'}
            onClick={updatePlatform}
            data-platform="windows"
          >
            WINDOWS
          </button>
          <button
            data-active={platform === 'ios'}
            onClick={updatePlatform}
            data-platform="ios"
          >
            iOS
          </button>
          <button
            data-active={platform === 'android'}
            onClick={updatePlatform}
            data-platform="android"
          >
            ANDROID
          </button>
        </div>
        <div className="tutorial-screen">
          {platform === 'mac' && <Mac />}
          {platform === 'windows' && <Windows11 />}
          {platform === 'ios' && <IOSClone />}
          {platform === 'android' && <PixelClone />}
        </div>
      </div>
    </div>
  );
}

export default App;
