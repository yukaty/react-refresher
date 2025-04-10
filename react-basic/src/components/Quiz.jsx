import { useState } from 'react';

export function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

  // Quiz data
  const quiz = {
    question: "What hook is used to manage side effects in React?",
    options: [
      { id: 1, text: "useState" },
      { id: 2, text: "useEffect" },
      { id: 3, text: "useContext" },
      { id: 4, text: "useRef" }
    ],
    correctAnswerId: 2
  };

  // set the selected answer
  const handleAnswerChange = (e) => {
    setSelectedAnswer(Number(e.target.value));
  };

  // check the answer
  const checkAnswer = () => {
    if (selectedAnswer === null) {
        setQuizResult("Select an answer!");
        return;
    }
    if (selectedAnswer === quiz.correctAnswerId) {
      setQuizResult("Correct!");
    } else {
      setQuizResult("Incorrect!");
    }
  };

  return (
    <section>
      <h2>Quiz</h2>
      <p>{quiz.question}</p>

      {quiz.options.map((option) => (
        <div key={option.id}>
          <input
            type="radio"
            id={`answer-${option.id}`}
            name="quiz"
            value={option.id}
            onChange={handleAnswerChange}
          />
          <label htmlFor={`answer-${option.id}`}>{option.text}</label>
        </div>
      ))}

      <button onClick={checkAnswer}>Answer</button>
      {quizResult && <p>{quizResult}</p>}
    </section>
  );
}

