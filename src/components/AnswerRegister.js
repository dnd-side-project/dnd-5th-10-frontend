import 'css/AnswerRegister.css'
import { withRouter } from 'react-router-dom'
import { Form, Input } from 'reactstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'

const AnswerRegister = ({ quiz }) => {
  const [answerTextContents, setAnswerTextContents] = useState('')
  const [answerContentsLength, setAnswerContentsLength] = useState(0)
  useEffect(() => {
    setAnswerContentsLength(answerTextContents.length)
    const answerArea = document.getElementById('answer-text-length')
    if (answerContentsLength >= 1 && answerContentsLength < 20) {
      answerArea.style.setProperty('color', 'red')
    } else if (answerContentsLength >= 1000) {
      answerArea.style.setProperty('color', 'red')
    } else {
      answerArea.style.setProperty('color', 'black')
    }
  }, [answerContentsLength, answerTextContents.length])

  const AnswerRegisterBtn = () => {
    return (
      <button
        className="quiz-btn"
        onClick={() => {
          if (answerTextContents.length >= 1 && answerTextContents.length < 20) {
            window.alert('최소 20자 이상 입력해주세요')
          } else {
            axios({
              method: 'post',
              url: '/api/v1/answer',
              data: {
                content: answerTextContents,
                questionId: localStorage.getItem('detailId'),
              },
            })
              .then((res) => {
                console.log(res.data)
                alert('답변이 등록되었습니다!')
                window.open(`/QuestionDetail?${localStorage.getItem('detailId')}`)
                window.close()
              })
              .catch((err) => {
                console.log(err)
                alert('답변이 등록되지 않았습니다!')
              })
          }
        }}>
        답변등록
      </button>
    )
  }

  return (
    <div>
      <div className="quiz-box">
        <Form>
          <div className="breadcrumbs">
            <img src="/img/LOGO1.png" alt="iterview-logo" />
            <span>테스트 문제 > </span>
            <span>인기 문제 > </span>
            <span className="subhead">문제 제목</span>
          </div>
          <div className="quiz-title">
            <img src="/img/figure1.png" alt="quiz-logo" />
            <span className="quiz-number">답변 등록</span>
          </div>
          <div className="quiz-contents-box">
            <h1 className="quiz-contents-title">문제 설명</h1>
            <h1 className="quiz-contents">{localStorage.getItem('detailTitle')}</h1>
          </div>
          <span id="answer-text-length">({answerTextContents.length}/1000)</span>
          <Input
            type="textarea"
            value={answerTextContents}
            maxLength="1000"
            onChange={(e) => {
              setAnswerTextContents(e.target.value)
            }}
            id="quiz-contents"
            placeholder="답을 입력해주세요."
          />
        </Form>
        <div className="next-quiz">{AnswerRegisterBtn()}</div>
      </div>
    </div>
  )
}

export default withRouter(AnswerRegister)
