import 'css/Question.css'
import { withRouter } from 'react-router-dom'

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
    localStorage.setItem('detailTitle', props.content)
    window.open(`/QuestionDetail?${props.id}`)
  }

  return (
    <div className="each-question">
      <button onClick={gotoDetails}>
        <div className="question-number">{checkQuestionNumber(props.number)}</div>
        {/* <div className="question-bookmark">
          <h1>좋아요</h1>
          <span>{props.bookmarkCount}</span>
        </div> */}
        <div className="question-content">
          {props.content}
          <br />
          <span>{props.answer}</span>
        </div>
        <div className="question-tag">{showQuestionTags}</div>
        {/* <div className="date-or-username">{props.username}</div> */}
      </button>
    </div>
  )
}

export default withRouter(Question)
