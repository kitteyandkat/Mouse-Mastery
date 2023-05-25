import { useState } from "react";
import "./Mac.css";
import AppleMenu from "./components/content/appleMenu/AppleMenu";
import FolderContent from "./components/content/folderContent/FolderContent";
import Folders from "./components/content/folders/Folders";
import MenuBar from "./components/menuBar/MenuBar";
import StatusBar from "./components/statusBar/StatusBar";

const Mac = () => {
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  //Fetch list of all modules from backend
  const [modules, setModules] = useState([{
    id: 1,
    device_type: 'mac',
    tite: 'finder',
    steps: [{
      id: 1,
      modal_text: 'click on download folder',
      active_element: '[data-folder-download]'
    }, {
      id: 2,
      modal_text:'find the lion photo',
      active_element:'[data-lion-png]'
    }]
  }])
  const [currentModule, setCurrentModule] = useState(modules[0])
  const [step, setCurrentStep] = useState(0)
  //create a function that listens to every click request on clone
  const onClick = e => {
    let correctTarget = e.target.closest(currentModule.steps[step].active_element)
    if (!correctTarget) return
    setCurrentStep(step + 1)
  }

  //Save to state variable 

  //(id, device_type, subject, step1, step2, step3, step4, recap) 
  // 1, mac, finder, click do

  const toggleAppleMenu = () => {
    setIsAppleMenuOpen(!isAppleMenuOpen);
  };

  const closeAppleMenu = () => {
    if (isAppleMenuOpen) {
      setIsAppleMenuOpen(false);
    }
  };

  const openFolderContent = () => {
    setIsFolderOpen(true);
  };

  const closeFolderContent = () => {
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
    </div>
  );
};

export default Mac;
