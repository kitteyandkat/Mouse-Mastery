import { useState } from 'react'
import './App.css'
import Windows11 from './assets/Windows/Windows'
import PixelClone from './assets/Android/Pixel'
import Mac from './assets/Mac/src/Mac'
import IOSClone from './assets/iOS/ios'

function App() {
  const [platform, setPlatform] = useState('windows')

  const updatePlatform = e => setPlatform(e.target.dataset.platform)

  return (
    <div className='main-container'>
      {/* <h1> MouseMastery </h1> */}
      <div className='tutorial-container'>
        <div className="platform-buttons">
          <button data-active={platform === 'mac'} onClick={updatePlatform} data-platform="mac">MAC</button>
          <button data-active={platform === 'windows'} onClick={updatePlatform} data-platform="windows">WINDOWS</button>
          <button data-active={platform === 'ios'} onClick={updatePlatform} data-platform="ios">iOS</button>
          <button data-active={platform === 'android'} onClick={updatePlatform} data-platform="android">ANDROID</button>
        </div>
        <div className='tutorial-screen'> 
          {platform === 'mac' && <Mac/>}
          {platform === 'windows' && <Windows11/>}
          {platform === 'ios' && <IOSClone/>}
          {platform === 'android' && <PixelClone/>}
        </div>
      </div>
    </div>

  )
}

export default App
