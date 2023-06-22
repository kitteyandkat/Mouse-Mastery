import React, { useState } from "react";
import "./SelectionPage.css";
import { FaAndroid, FaWindows } from "react-icons/fa";
import { SiIos, SiMacos } from "react-icons/si";

const SelectionPage = () => {
  const [selectedIcon, setSelectedIcon] = useState("");
  const [showStartButton, setShowStartButton] = useState(false);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    setShowStartButton(true);
  };

  const handleStartButtonClick = () => {
    console.log("Start button clicked for", selectedIcon);
  };

  return (
    <div className="selection-page">
      <div className="logo-container">
        <h1 className="logo-mouse">Mouse</h1>
        <h1 className="logo-mastery">Mastery</h1>
      </div>
      <div className={`button-container ${selectedIcon ? "collapsed" : ""}`}>
        {!selectedIcon ? (
          <>
            <button className="button" onClick={() => handleIconClick("android")}>
              <FaAndroid className="icon" size={64} />
              <span className="icon-text">Android</span>
            </button>
            <button className="button" onClick={() => handleIconClick("windows")}>
              <FaWindows className="icon" size={64} />
              <span className="icon-text">Windows</span>
            </button>
            <button className="button" onClick={() => handleIconClick("ios")}>
              <SiIos className="icon" size={64} />
              <span className="icon-text">iPhone</span>
            </button>
            <button className="button" onClick={() => handleIconClick("macos")}>
              <SiMacos className="icon" size={64} />
              <span className="icon-text">macOS</span>
            </button>
          </>
        ) : (
          <button className="selected-button" onClick={handleStartButtonClick}>
            {selectedIcon === "android" && (
              <>
                <FaAndroid className="icon" size={64} />
                <span className="icon-text">Android</span>
              </>
            )}
            {selectedIcon === "windows" && (
              <>
                <FaWindows className="icon" size={64} />
                <span className="icon-text">Windows</span>
              </>
            )}
            {selectedIcon === "ios" && (
              <>
                <SiIos className="icon" size={64} />
                <span className="icon-text">iPhone</span>
              </>
            )}
            {selectedIcon === "macos" && (
              <>
                <SiMacos className="icon" size={64} />
                <span className="icon-text">macOS</span>
              </>
            )}
          </button>
        )}
      </div>
      {showStartButton && (
        <button className="start-button" onClick={handleStartButtonClick}>
          Start
        </button>
      )}
    </div>
  );
};

export default SelectionPage;