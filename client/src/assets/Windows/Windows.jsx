import React from "react";
import '../Windows/windows.css'
import WordIcon from "/img/windows/word-icon.png";
import PhotosIcon from "/img/windows/phottos.png";
import PowerPointIcon from "/img/windows/powerpoint-icon.png";
import ExcelIcon from "/img/windows/excel-icon.png";
import MSOfficeIcon from "/img/windows/ms-office.png";
import VSCodeIcon from "/img/windows/vs-code.png";
import VSNormalIcon from "/img/windows/vs-normal.png";
import MSSkypeIcon from "/img/windows/ms-skype.png";
import OutlookIcon from "/img/windows/outlook-icon.png";
import MSVideoIcon from "/img/windows/ms-video-icon.png";
import SettingsIcon from "/img/windows/Settings.png";
import WhiteboardIcon from "/img/windows/Whiteboard.png";
import Paint2DIcon from "/img/windows/Paint-2D.png";
import Paint3DIcon from "/img/windows/Paint-3D.png";
import PhotosFolderIcon from "/img/windows/Photos-folder.png";
import WindowsLogo from "/img/windows/Logo windows 11.png";
import SearchIcon from "/img/windows/Search.png";
import EdgeIcon from "/img/windows/edge-icon.png";
import MSFileExplorerIcon from "/img/windows/ms-file-explorer.png";
import PowerButton from "/img/windows/power-btn.png"


function Windows11Clone() {
  return (
    <div className="windows-container">
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
