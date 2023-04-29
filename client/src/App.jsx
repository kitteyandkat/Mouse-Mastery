import { useState } from 'react'
import './App.css'
import Windows11 from './assets/windows/Windows.jsx'
import WindowsTutorial from './components/WindowsTutorial'

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

        {/* <div className='tutorial-screen'>  */}
           {platform === 'windows' && <WindowsTutorial/>}

       {/* </div>  */}
        <Windows11/>
  

    
      </div>
    </div>

  )
}

export default App
