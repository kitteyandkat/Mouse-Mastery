import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-status"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;