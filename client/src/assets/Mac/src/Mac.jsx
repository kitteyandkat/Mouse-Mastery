import { useState } from "react";
import "./Mac.css";
import AppleMenu from "./components/content/appleMenu/AppleMenu";
import FolderContent from "./components/content/folderContent/FolderContent";
import Folders from "./components/content/folders/Folders";
import MenuBar from "./components/menuBar/MenuBar";
import StatusBar from "./components/statusBar/StatusBar";
import Modal from "./components/modal/modal";
import {bounceAnimation} from "./components/menuBar/MenuBar.module.css";


const Mac = () => {
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hintCount, setHintCount] = useState(0)
  //Fetch list of all modules from backend
  const [modules, setModules] = useState([{
    id: 1,
    device_type: 'mac',
    tite: 'download folder',
    steps: [{
      id: 1,
      modal_text: 'click on download folder',
      active_element: '[data-folder-download]'
    }, {
      id: 2,
      modal_text: 'find the lion photo',
      active_element: '[data-lion-png]'
    }]
  },
  {
    id: 2,
    device_type: 'mac',
    tite: 'menu bar',
    steps: [{
      id: 3,
      modal_text: 'click on apple icon',
      active_element: '[]'
    }, {
      id: 4,
      modal_text: '',
      active_element: '[]'
    }]
  }])
  const [currentModule, setCurrentModule] = useState(modules[0])
  const [step, setCurrentStep] = useState(0)
  const [modalOpen, setModalOpen] = useState(true)
  //create a function that listens to every click request on clone
  const onClick = e => {
    if(modalOpen)return
    let correctTarget = e.target.closest(currentModule.steps[step]?.active_element)
    if (!correctTarget) {
      console.log('wrong answer')
      setHintCount(hintCount+1)
      if(hintCount >= 2){
        setModalOpen(true)
        document.querySelector(currentModule.steps[step]?.active_element)?.classList.add(bounceAnimation)
      }
      return
    }
    console.log('correct answer')
    setModalOpen(true)
    setCurrentStep(step + 1)
    // if (!active_element){
      
      // }
    }
    
    const onModalContinue = e => {
      setModalOpen(false)
      document.querySelector(currentModule.steps[step]?.active_element)?.classList.remove(bounceAnimation)
  }

  //Save to state variable 


  const toggleAppleMenu = () => {
    if(modalOpen)return
    setIsAppleMenuOpen(!isAppleMenuOpen);
  };

  const closeAppleMenu = () => {
    if(modalOpen)return
    if (isAppleMenuOpen) {
      setIsAppleMenuOpen(false);
    }
  };

  const openFolderContent = () => {
    if(modalOpen)return
    setIsFolderOpen(true);
  };

  const closeFolderContent = () => {
    if(modalOpen)return
    setIsFolderOpen(false);
  };

  return (
    <div className="mac-container" onClick={onClick}>
      <StatusBar toggleAppleMenu={toggleAppleMenu} />
      <div className="inner_wrapper" onClick={closeAppleMenu}>
        <Folders openFolderContent={openFolderContent} />
        <FolderContent
          isFolderOpen={isFolderOpen}
          closeFolderContent={closeFolderContent}
        />
        <AppleMenu isAppleMenuOpen={isAppleMenuOpen} />
      </div>
      <MenuBar />
      <Modal open={modalOpen} text={currentModule.steps[step]?.modal_text || 'You Did It! 🤪'} onModalContinue={onModalContinue} />
    </div>
  );
};

export default Mac;
