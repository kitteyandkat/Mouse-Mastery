import React, { useRef } from 'react';

const SoundPlayer = ({ src }) => {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <button onClick={playSound}>Play Sound</button>
    </div>
  );
};

// Sound imports placed inside the component file
import openModalSound from '../assets/Sounds/Open Modal.mp3';
import closeModalSound from '../assets/Sounds/Close Modal.mp3';
import correctAnswerSound from '../assets/Sounds/Correct Answer.mp3';
import incorrectAnswerSound from '../assets/Sounds/Incorrect Answer.mp3';
import nextButtonSound from '../assets/Sounds/Next.mp3';
import passQuizSound from '../assets/Sounds/Passed Quiz.mp3';

export default SoundPlayer;
