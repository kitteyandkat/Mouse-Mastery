import { useState, useEffect } from 'react'
import './App.css'
// import PixelClone from './assets/Android/Pixel'
import Mac from './assets/Mac/src/Mac'
import Windows11 from './assets/Windows/src/App'
import IOSClone from './assets/iOS/ios'
import LoadingPage from './LoadingPage';
 import LandingPage from './LandingPage';
 import SelectionPage from './SelectionPage';


function App() {
  const [platform, setPlatform] = useState('windows')
  const [isLoading, setIsLoading] = useState(true);
  const [showStartPage, setShowStartPage] = useState(true);
  const [showSelectionPage, setShowSelectionPage] = useState(false);
  const updatePlatform = e => setPlatform(e.target.dataset.platform)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const hideSelectionPage =(selectedPlatform) =>{
    setShowSelectionPage(false)
    setPlatform(selectedPlatform)
  }
  const handleStart = () => {
    setShowStartPage(false);
    setShowSelectionPage(true);
  };
  if (isLoading) {
    return <LoadingPage />;
  }

  if (showStartPage) {
    return <LandingPage handleStart={handleStart} />;
  }

  if (showSelectionPage) {
    return <SelectionPage hideSelectionPage={hideSelectionPage} />;
  }

  return (
    <div className='main-container'>
      {/* <h1> MouseMastery </h1> */}
      <div className='tutorial-container'>
        <div className="platform-buttons">
          <button data-active={platform === 'mac'} onClick={updatePlatform} data-platform="mac">MAC</button>
          <button data-active={platform === 'windows'} onClick={updatePlatform} data-platform="windows">WINDOWS</button>
          <button data-active={platform === 'ios'} onClick={updatePlatform} data-platform="ios">iOS</button>
          {/* <button data-active={platform === 'android'} onClick={updatePlatform} data-platform="android">ANDROID</button> */}
        </div>
        <div className='tutorial-screen'> 
          {platform === 'mac' && <Mac/>}
          {platform === 'windows' && <Windows11/>}
          {platform === 'ios' && <IOSClone/>}
          {/* {platform === 'android' && <PixelClone/>} */}
        </div>
      </div>
    </div>

  )
}

export default App
