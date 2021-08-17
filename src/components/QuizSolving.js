import 'css/QuizSolving.css'
import { withRouter } from 'react-router-dom'
import { Form, Input } from 'reactstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import QuizResult from './QuizResult'

const QuizSolving = ({ quiz }) => {
  const [answerTextContents, setAnswerTextContents] = useState('')
  const [allAnswer, setAllAnswer] = useState([])
  const [answerContentsLength, setAnswerContentsLength] = useState(0)
  const [quizNum, setQuizNum] = useState(0)
  const [quizIdNum, setQuizIdNum] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [allQuizTag, setAllQuizTag] = useState([])

  let quizList = []
  let quizIdList = []
  let quizTagList = allQuizTag
  let answerList = allAnswer

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

  quiz.forEach((item) => {
    quizList.push(item.content)
    quizIdList.push(item.id)
  })

  useEffect(() => {
    quizIdList.map((item, i) => {
      axios(`/api/v1/question/${quizIdList[i]}`)
        .then((res) => {
          // console.log(res.data.tagList)
          quizTagList.push(res.data.tagList)
          setAllQuizTag(quizTagList)
          // console.log(quizTagList)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }, [])

  localStorage.setItem('quizId', quizIdList)

  const nextBtn = () => {
    return (
      <button
        className="quiz-btn"
        onClick={() => {
          if (answerTextContents.length >= 1 && answerTextContents.length < 20) {
            window.alert('최소 20자 이상 입력해주세요')
          } else {
            if (answerTextContents.length === 0) {
              setQuizNum(quizNum + 1)
              setQuizIdNum(quizIdNum + 1)
            } else {
              answerList.push({ content: answerTextContents, questionId: quizIdList[quizNum] })
              setAllAnswer(answerList)
              setAnswerTextContents('')
              setQuizNum(quizNum + 1)
              setQuizIdNum(quizIdNum + 1)
              // console.log(answerList)
            }
          }
        }}>
        다음 문제로 넘어가기
      </button>
    )
  }

  const exitQuizBtn = () => {
    // console.log(quizNum)
    return (
      <button
        className="quiz-btn"
        onClick={() => {
          if (answerTextContents.length >= 1 && answerTextContents.length < 20) {
            window.alert('최소 20자 이상 입력해주세요')
          } else {
            if (answerTextContents.length === 0) {
              postAnswer()
              setShowResult(true)
            } else {
              answerList.push({ content: answerTextContents, questionId: quizIdList[quizNum] })
              setAllAnswer(answerList)
              // console.log(answerList)
              postAnswer()
              setShowResult(true)
            }
          }
        }}>
        퀴즈 종료 하기
      </button>
    )
  }

  const postAnswer = () => {
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
  }

  return (
    <div>
      {showResult ? (
        <QuizResult id={quizIdList} content={quizList} tag={quizTagList}></QuizResult>
      ) : (
        <div className="quiz-box">
          <Form>
            <div className="breadcrumbs">
              <img src="/img/LOGO1.png" alt="iterview-logo" />
              {/* {console.log(quiz)} */}
              <span>테스트 문제 > </span>
              <span>인기 문제 > </span>
              <span className="subhead">문제 제목</span>
            </div>
            <div className="quiz-title">
              <img src="/img/figure1.png" alt="quiz-logo" />
              <span className="quiz-number">Quiz {quizNum + 1}.</span>
              <span className="time-title">
                <img className="timer-img" src="/img/nav_icon5.png" alt="quiz-timer-img"></img>
                이번퀴즈 총 소요시간
                <span id="time">
                  <span id="hour">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>
                </span>
              </span>
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
          <div className="next-quiz">{quizNum !== quizList.length - 1 ? nextBtn() : exitQuizBtn()}</div>
        </div>
      )}
    </div>
  )
}

export default withRouter(QuizSolving)
