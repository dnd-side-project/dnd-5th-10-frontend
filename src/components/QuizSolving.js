import 'css/QuizSolving.css'
import { Link, withRouter } from 'react-router-dom'
import { Form, Input } from 'reactstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'

const QuizSolving = ({ quiz }) => {
  const [answerTextContents, setAnswerTextContents] = useState('')
  const [allAnswer, setAllAnswer] = useState([])
  const [answerContentsLength, setAnswerContentsLength] = useState(0)
  const [quizNum, setQuizNum] = useState(0)
  const [quizIdNum, setQuizIdNum] = useState(0)

  let quizList = []
  let quizIdList = []

  const [alltime, setAllTimer] = useState('')

  var time = 0
  var hour = 0
  var min = 0
  var sec = 0
  var timer

  // console.log(quiz)
  const init = () => {
    document.getElementById('timer').innerHTML = '00:00:00'
  }

  const countTime = () => {
    if (time == 0) {
      init()
    }

    timer = setInterval(function () {
      time++

      min = Math.floor(time / 60)
      hour = Math.floor(min / 60)
      sec = time % 60
      min = min % 60

      var th = hour
      var tm = min
      var ts = sec
      if (th < 10) {
        th = '0' + hour
      }
      if (tm < 10) {
        tm = '0' + min
      }
      if (ts < 10) {
        ts = '0' + sec
      }

      document.getElementById('timer').innerHTML = th + ':' + tm + ':' + ts
    }, 1000)
  }

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
  }, [answerTextContents.length, answerContentsLength])

  quiz.forEach((item) => {
    quizList.push(item.content)
    quizIdList.push(item.id)
  })

  const nextBtn = () => {
    return (
      <button
        className="quiz-btn"
        onClick={() => {
          if (answerTextContents.length >= 1 && answerTextContents.length < 20) {
            window.alert('최소 20자 이상 입력해주세요')
          } else {
            // post로 answer 전송할 코드 추가
            if (answerTextContents.length === 0) {
              setQuizNum(quizNum + 1)
              setQuizIdNum(quizIdNum + 1)
            } else {
              let answerList = allAnswer
              answerList.push({ content: answerTextContents, questionId: quizIdList[quizNum] })
              setAllAnswer(answerList)
              setAnswerTextContents('')
              setQuizNum(quizNum + 1)
              setQuizIdNum(quizIdNum + 1)
              console.log(answerList)
            }
          }
        }}>
        다음 문제로 넘어가기
      </button>
    )
  }

  const exitQuizBtn = () => {
    return (
      <Link to="/QuizResult">
        <button
          className="quiz-btn"
          onClick={() => {
            axios({
              method: 'post',
              url: '/api/v1/answer/',
              data: allAnswer,
            })
              .then((res) => {
                console.log(res)
              })
              .catch((err) => {
                console.log(err)
              })
          }}>
          퀴즈 종료 하기
        </button>
        <div>
          {localStorage.setItem('allTime', time)}
          {(time = 0)}
          {init()}
          {clearInterval(timer)}
        </div>
      </Link>
    )
  }

  return (
    <div className="quiz-box">
      <Form>
        <div className="breadcrumbs">
          <img
            src="https://lh3.googleusercontent.com/proxy/WwYnVCZluDkWHIl5-H0NHtVQ2dNXzvxIeioZRsXQg86tjEc2BfiIctFSw0tdOGAh0YEIHHsJJDrDXiHshW78en6XwtcJckrkct19Ya9UQl23A2e8"
            alt="iterview-logo"
          />
          <span>테스트 문제 > </span>
          <span>인기 문제 > </span>
          <span className="subhead">문제 제목</span>
        </div>
        <div className="quiz-title">
          <img src="https://img.icons8.com/cotton/452/warning-triangle.png" alt="quiz-logo" />
          <span className="quiz-number">Quiz {quizNum + 1}.</span>
          <span className="total-elapsed-time">
            <img
              className="timer-img"
              src="https://images.vexels.com/media/users/3/128840/isolated/preview/c091629800ce3d91d8527d32d60bc46f-stopwatch-timer.png"
              alt="quiz-timer-img"></img>
            이번퀴즈 총 소요시간
          </span>
          <span id="timer">00:00:00</span>
        </div>
        <div className="quiz-contents-box">
          <h1 className="quiz-contents-title">문제 설명</h1>
          <h1 className="quiz-contents">{quizList[quizNum]}</h1>
        </div>
        {/* {console.log(quizContents)} */}
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
      {/* {countTime()} */}
      <div className="next-quiz">{quizNum !== quizList.length - 1 ? nextBtn() : exitQuizBtn()}</div>
    </div>
  )
}

export default withRouter(QuizSolving)
