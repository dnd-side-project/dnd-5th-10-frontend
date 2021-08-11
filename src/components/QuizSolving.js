import 'css/QuizSolving.css'
import { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Form, Input } from 'reactstrap'
import { useState } from 'react'

const QuizSolving = () => {
  const quizTag = localStorage.getItem('selectedQuizTag')
  const quizTagArr = JSON.parse(quizTag)
  const quizCnt = parseInt(localStorage.getItem('selectedQuizCnt'))

  const [allQuizContents, setAllQuizContents] = useState([])
  const [answerTextContents, setanswerTextContents] = useState('')
  let quizContents = allQuizContents

  useEffect(() => {
    axios
      .get(`/api/v1/question/quiz?size=${quizCnt}&tags=${quizTagArr}`)
      .then((res) => {
        res.data.forEach((item, i, arr) => {
          quizContents.push(arr[i].content)
        })
        setAllQuizContents(allQuizContents)
        console.log(allQuizContents)
      })
      .catch((err) => {
        console.log(err)
      }, [])
  })

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
          <h1 className="quiz-contents"> {allQuizContents[0]} </h1>
        </div>
        {console.log(quizContents)}
        <hr className="quizAnswerLine" />
        <Input
          type="textarea"
          value={answerTextContents}
          maxLength="1000"
          onChange={(e) => {
            setanswerTextContents(e.target.value)
          }}
          id="quiz-contents"
          placeholder="답변을 입력해주세요."
        />
      </Form>
      <div className="next-quiz">
        <button>다음 문제로 넘어가기</button>
      </div>
    </div>
  )
}

export default withRouter(QuizSolving)
