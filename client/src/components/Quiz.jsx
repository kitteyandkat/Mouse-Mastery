import Modal from "./Modal";

function Quiz(props) {
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const questions = props.questions;

  function handleNextQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer("");
  }

  function handleAnswerSelect(e) {
    setSelectedAnswer(e.target.value);
  }

  return (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <ul>
        {questions[currentQuestionIndex].answers.map((answer, index) => (
          <li key={index}>
            <input
              type="radio"
              id={answer}
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleAnswerSelect}
            />
            <label htmlFor={answer}>{answer}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion}>Next</button>
      {showModal && <Modal content={modalContent} onClose={() => setShowModal(false)} />}

    </div>
  );
}

export default Quiz;


  /*the Quiz component takes in these props:

questions:an array of objects representing each question in the quiz, with each object containing a questionText property 
and an answers array property

currentQuestionIndex: an integer representing the index of the current question being displayed

onNextQuestion: a function that gets called when the user clicks the "Next" button
The component uses the currentQuestionIndex prop to access the current question object from the questions array, 
and renders the question text and a set of radio button inputs for each answer choice.
When the user clicks the "Next" button, the handleNextQuestion function is called, 
which in turn calls the onNextQuestion function passed in as a prop.
*/