import './App.scss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'

function App() {

  const [answer, setAnswer] = useState([])
  const [question, setQuestion] = useState(["This", "is", "a", "sentence"])

  const move = (word, index) => {
    const newAnswer = [...answer]
    newAnswer.push(word)
    setAnswer(newAnswer)
    const newQuestion = [...question]
    newQuestion.splice(index, 1)
    setQuestion(newQuestion)
  }

  const moveBack = (word, index) => {
    const newQuestion = [...question]
    newQuestion.push(word)
    setQuestion(newQuestion)
    const newAnswer = [...answer]
    newAnswer.splice(index, 1)
    setAnswer(newAnswer)
  }

  return (
    <div className="app">
      <div className="container">
        {answer.map((word, i) => {
          return (
            <div className="word" key={i} onClick={() => moveBack(word, i)}>
              {word}
            </div>
          )
        })}
      </div>
      <div className="container">
        {question.map((word, i) => {
            return (
              <div className="word" key={i} onClick={() => move(word, i)}>
                {word}
              </div>
            )
        })} 
      </div>
    </div>
  )
}

export default App;
