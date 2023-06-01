import React from 'react';
import { Modal } from 'react-responsive-modal';
import './CorrectAnswerModal.css';

const CorrectAnswerModal = ({ isOpen, onClose, onNext }) => {
  return (
    <Modal open={isOpen} onClose={onClose} center>
      <h2>Congratulations!</h2>
      <p>Your answer is correct!</p>
      <button onClick={onNext}>Next</button>
    </Modal>
  );
};

export default CorrectAnswerModal;
