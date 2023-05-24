import React from "react";
import '../Windows/windows.css'

function Windows11Clone() {
  return (
    <div className="windows-container">
      <div className="content-box" id="control">
        <input type="search" placeholder="Type here to Search" />
        <div className="pinned">
          <img src='/img/windows/word-icon.png' alt="" />
          <img src="/img/windows/phottos.png" alt="" />
          <img src="/img/windows/powerpoint-icon.png" alt="" />
          <img src="/img/windows/excel-icon.png" alt="" />
          <img src="/img/windows/ms-office.png" alt="" />
          <img src="/img/windows/vs-code.png" alt="" />
          <img src="/img/windows/vs-normal.png" alt="" />
        </div>
        <div className="pinned">
          <img src="/img/windows/ms-skype.png" alt="" />
          <img src="/img/windows/outlook-icon.png" alt="" />
          <img src="/img/windows/ms-video-icon.png" alt="" />
          <img src="/img/windows/Settings.png" alt="" />
          <img src="/img/windows/Whiteboard.png" alt="" />
          <img src="/img/windows/Paint-2D.png" alt="" />
          <img src="/img/windows/Paint-3D.png" alt="" />
        </div>
        <div className="contents-recom">
          <div className="recommend">
            <h1>Recommended</h1>
            <div className="icon">
              <img src="/img/windows/Photos-folder.png" alt="" />
            </div>
            <div className="history">
              <h2>Youtube File</h2>
              <h4>Yesterday 2:50 PM</h4>
            </div>
          </div>
          <div className="recommend">
            <div className="icon">
              <img src="/img/windows/ms-video-icon.png" alt="" />
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
            <img src="/img/windows/power-btn.png" alt="" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="logo" id="toggle">
          <img src="/img/windows/Logo windows 11.png" alt="" />
        </div>
        <div className="logo">
          <img src="/img/windows/Search.png" alt="" />
        </div>
        <div className="logo">
          <img src="/img/windows/edge-icon.png" alt="" />
        </div>
        <div className="logo">
          <img src="/img/windows/ms-file-explorer.png" alt="" />
        </div>
        <div className="logo">
          <img src="/img/windows/vs-code.png" alt="" />
        </div>
        <div className="logo">
          <img src="/img/windows/phottos.png" alt="" />
        </div>
        <div className="logo">
          <img src='/img/windows/word-icon.png' alt="" />
        </div>
        <div className="logo">
          <img src="/img/windows/powerpoint-icon.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Windows11Clone;
