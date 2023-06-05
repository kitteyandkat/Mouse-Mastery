import React from "react";
import '../Windows/windows.css'
import WordIcon from "./Images/word-icon.png";
import PhotosIcon from "./Images/phottos.png";
import PowerPointIcon from "./Images/powerpoint-icon.png";
import ExcelIcon from "./Images/excel-icon.png";
import MSOfficeIcon from "./Images/ms-office.png";
import VSCodeIcon from "./Images/vs-code.png";
import VSNormalIcon from "./Images/vs-normal.png";
import MSSkypeIcon from "./Images/ms-skype.png";
import OutlookIcon from "./Images/outlook-icon.png";
import MSVideoIcon from "./Images/ms-video-icon.png";
import SettingsIcon from "./Images/Settings.png";
import WhiteboardIcon from "./Images/Whiteboard.png";
import Paint2DIcon from "./Images/Paint-2D.png";
import Paint3DIcon from "./Images/Paint-3D.png";
import PhotosFolderIcon from "./Images/Photos-folder.png";
import WindowsLogo from "./Images/Logo windows 11.png";
import SearchIcon from "./Images/Search.png";
import EdgeIcon from "./Images/edge-icon.png";
import MSFileExplorerIcon from "./Images/ms-file-explorer.png";
import PowerButton from "./Images/power-btn.png"


function Windows11Clone() {
  return (
    <div>
      <div className="content-box" id="control">
        <input type="search" placeholder="Type here to Search" />
        <div className="pinned">
          <img src={WordIcon} alt="" />
          <img src={PhotosIcon} alt="" />
          <img src={PowerPointIcon} alt="" />
          <img src={ExcelIcon} alt="" />
          <img src={MSOfficeIcon} alt="" />
          <img src={VSCodeIcon} alt="" />
          <img src={VSNormalIcon} alt="" />
        </div>
        <div className="pinned">
          <img src={MSSkypeIcon} alt="" />
          <img src={OutlookIcon} alt="" />
          <img src={MSVideoIcon} alt="" />
          <img src={SettingsIcon} alt="" />
          <img src={WhiteboardIcon} alt="" />
          <img src={Paint2DIcon} alt="" />
          <img src={Paint3DIcon} alt="" />
        </div>
        <div className="contents-recom">
          <div className="recommend">
            <h1>Recommended</h1>
            <div className="icon">
              <img src={PhotosFolderIcon} alt="" />
            </div>
            <div className="history">
              <h2>Youtube File</h2>
              <h4>Yesterday 2:50 PM</h4>
            </div>
          </div>
          <div className="recommend">
            <div className="icon">
              <img src={MSVideoIcon} alt="" />
            </div>
            <div className="history2">
              <h2>Windows.mp4</h2>
              <h4>Yesterday 3:50 PM</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="profile">Coder48White</div>
          <div className="btn">
            <img src={PowerButton} alt="" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="logo" id="toggle">
          <img src={WindowsLogo} alt="" />
        </div>
        <div className="logo">
          <img src={SearchIcon} alt="" />
        </div>
        <div className="logo">
          <img src={EdgeIcon} alt="" />
        </div>
        <div className="logo">
          <img src={MSFileExplorerIcon} alt="" />
        </div>
        <div className="logo">
          <img src={VSCodeIcon} alt="" />
        </div>
        <div className="logo">
          <img src={PhotosIcon} alt="" />
        </div>
        <div className="logo">
          <img src={WordIcon} alt="" />
        </div>
        <div className="logo">
          <img src={PowerPointIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Windows11Clone;
