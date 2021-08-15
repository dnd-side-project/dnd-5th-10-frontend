import { Button } from 'reactstrap'

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
          {props.content_title}
          <br />
          {props.content_answer}
        </div>
        <Button>좋아요! {props.like}</Button>
      </div>
    </div>
  )
}

export default Answer
