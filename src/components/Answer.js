import { Button } from 'reactstrap'
import 'css/Answer.css'

const Answer = (props) => {
  const checkQuestionNumber = (num) => {
    let questionNum = num.toString()
    if (questionNum.length < 2) {
      return '0' + num
    }
    return questionNum
  }

  return (
    <div className="each-answer">
      <div className="answer-card">
        <div className="answer-number">{checkQuestionNumber(props.number)}</div>
        <div className="answer-content">
          <h1>{props.content_title}</h1>

          <h5>{props.content_answer}</h5>
        </div>
        <button>좋아요! {props.like}</button>
      </div>
    </div>
  )
}

export default Answer
