import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import './Quiz.css';

const Quiz = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Sample Quiz</h2>
        <p className="question">What are the main features of the Phone app?</p>
        <form>
          <label>
            <input type="radio" name="answer" value="a" />
            Camera, messages, and settings
          </label>
          <br />
          <label>
            <input type="radio" name="answer" value="b" />
            Keypad, contacts, and recent calls
          </label>
          <br />
          <label>
            <input type="radio" name="answer" value="c" />
            Music, videos, and podcasts
          </label>
        </form>
        <button>Submit</button>
      </Modal>
    </div>
  );
};

export default Quiz;