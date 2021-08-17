import { Button } from 'reactstrap'
import 'css/Answer.css'
import axios from 'axios'

const Answer = (props) => {
  const checkQuestionNumber = (num) => {
    let questionNum = num.toString()
    if (questionNum.length < 2) {
      return '0' + num
    }
    return questionNum
  }

  const likeIt = () => {
    axios({
      method: 'post',
      url: '/api/v1/answer/like',
      // data: {
      //   content: textContents,
      //   bookmarkCount: 0,
      //   tags: questionRegiTagArr,
      // },
      params: {
        answerId: props.id,
      },
    })
      .then((res) => {
        console.log(res)
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
        window.alert('이미 좋아요한 답변입니다.')
      })
  }

  return (
    <div className="each-answer">
      <div className="answer-card">
        <div className="answer-number">{checkQuestionNumber(props.number)}</div>
        <div className="answer-content">
          <h1>{props.title}</h1>

          <h5>{props.answer}</h5>
        </div>
        <button onClick={likeIt}>좋아요! {props.like}</button>
      </div>
    </div>
  )
}

export default Answer
