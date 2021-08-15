import { useEffect, useState } from 'react'
import 'css/QuestionDetail.css'
import { Button } from 'reactstrap'
import axios from 'axios'

// 북마크 개수, 해당되는 태그, 작성자 없음

const questionId = window.location.search.slice(1, window.location.search.length)
const QuestionDetail = () => {
  const [questionContent, setQuesitonContent] = useState('문제 설명 업따')
  const getQuestion = () => {
    axios
      .get(`/api/v1/question/${questionId}`)
      .then((res) => {
        console.log(res.data)
        setQuesitonContent(res.data.content)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // const getMyAnswer = () => {}

  useEffect(() => {
    getQuestion()
  }, questionId)
  return (
    <div>
      <div className="question-detail-content">
        <h1>문제 설명</h1>
        <span>{questionContent}</span>
      </div>
      <div className="question-detail-answer">
        <span>나의 답변</span>
        <div> 딥변 카드 문제 카드</div>
      </div>
      <div className="question-detail-others">
        <h2>다른 사람의 답변</h2>
      </div>
    </div>
  )
}

export default QuestionDetail
