import 'css/QuizSolving.css'
import { withRouter } from 'react-router-dom'
import { Form, Input } from 'reactstrap'
import { useState } from 'react'

const QuizSolving = ({ quiz }) => {
  const [answerTextContents, setanswerTextContents] = useState('')
  let quizList = []
  let quizIdList = []
  const [quizNum, setQuizNum] = useState(0)

  console.log(quiz)

  quiz.forEach((item) => {
    quizList.push(item.content)
    quizIdList.push(item.id)
  })

  const nextBtn = () => {
    return (
      <button
        className="quiz-btn"
        onClick={() => {
          setQuizNum(quizNum + 1)
        }}>
        다음 문제로 넘어가기
      </button>
    )
  }
  const exitQuizBtn = () => {
    return <button className="quiz-btn">퀴즈 종료 하기</button>
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
          <span>Quiz 1.</span>
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
            setanswerTextContents(e.target.value)
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
