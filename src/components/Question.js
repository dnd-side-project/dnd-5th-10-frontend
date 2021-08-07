import 'css/Question.css'
import { Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'

// TODO: 디자이너 분들이랑 태그 여러개일 때 표시 방법 논의하기

const Question = (props) => {
  const showQuestionTags = props.tagList.map((item, index) => {
    if (index < 3) {
      return (
        <div className="question-tags" key={index}>
          {item['tagTitle']}
        </div>
      )
    } else {
      return <div key={index}></div>
    }
  })

  const checkQuestionNumber = (num) => {
    let questionNum = num.toString()
    if (questionNum.length < 2) {
      return '0' + num
    }
    return questionNum
  }

  const gotoDetails = () => {
    props.history.push(`/QuestionDetails/${props.id}`)
  }

  return (
    <div className="each-question">
      <Button onClick={gotoDetails}>
        <div className="question-number">{checkQuestionNumber(props.number)}</div>
        <div className="question-bookmark">
          <h1>좋아요</h1>
          <span>{props.bookmarkCount}</span>
        </div>
        <div className="question-content">
          {props.content}
          <br />
          {showQuestionTags}
        </div>
        <div className="date-or-username">{props.username}</div>
      </Button>
    </div>
  )
}

export default withRouter(Question)
