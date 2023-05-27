import React, { useState } from 'react';

const ProgressBar = () => {
  const [completedLessons, setCompletedLessons] = useState(1);
  const updateProgress = () => {
  };

  const progressPercentage = completedLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
