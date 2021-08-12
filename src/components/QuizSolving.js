import 'css/QuizSolving.css'
import { withRouter } from 'react-router-dom'
import { Form, Input } from 'reactstrap'
import { useEffect, useState } from 'react'

const QuizSolving = ({ quiz }) => {
  const [answerTextContents, setAnswerTextContents] = useState('')
  const [allAnswer, setAllAnswer] = useState([{}])
  const [answerContentsLength, setAnswerContentsLength] = useState(0)
  const [quizNum, setQuizNum] = useState(0)
  const [quizIdNum, setQuizIdNum] = useState(0)

  let quizList = []
  let quizIdList = []
  let answerList = []

  console.log(quiz)
  console.log(answerList)

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
            console.log(quizNum)
            console.log(quizIdNum)
            answerList.push({ content: answerTextContents, questionId: quizIdList[quizIdNum] })
            setAnswerTextContents('')
            setQuizNum(quizNum + 1)
            setQuizIdNum(quizIdNum + 1)
            console.log(answerList)
          }
        }}>
        다음 문제로 넘어가기
      </button>
    )
  }

  const exitQuizBtn = () => {
    return <button className="quiz-btn">퀴즈 종료 하기</button>
  }

  const registerAnswerAboutQuiz = () => {
    if (answerTextContents.length >= 1 && answerTextContents.length < 20) {
    }
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
          <span>Quiz {quizNum + 1}.</span>
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
  )
}

export default withRouter(QuizSolving)
