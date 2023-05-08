import React, { useState } from "react";
import Modal from "./Modal";

function Quiz(props) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  function handleCheckAnswer() {
    let result = "";
    if (selectedAnswer === props.correctAnswer) {
      result = "Correct!";
    } else {
      result = "Incorrect. Try again!";
      setShowModal(true);
      setModalContent(props.incorrectModalContent);
    }
    alert(result);
  }

  return (
    <div>
      <p>{props.question}</p>
      {props.answers.map((answer, index) => (
        <div key={index}>
          <input
            type="radio"
            name={props.question}
            value={answer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          />
          <label htmlFor={answer}>{answer}</label>
        </div>
      ))}
      <button onClick={handleCheckAnswer}>Next</button>
      {showModal && <Modal content={modalContent} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Modal;