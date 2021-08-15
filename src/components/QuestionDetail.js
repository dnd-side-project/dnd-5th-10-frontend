import { useCallback, useEffect, useState } from 'react'
import 'css/QuestionDetail.css'
import { Button } from 'reactstrap'
import axios from 'axios'
import QuestionList from './QuestionList'
import AnswerList from './AnswerList'

// 북마크 개수, 해당되는 태그, 작성자 없음

const QuestionDetail = () => {
  const [questionId, setQuestionId] = useState('')
  const [questionContent, setQuesitonContent] = useState('문제 설명 업따')
  const [sort, setSort] = useState('bookmarkCount')

  useEffect(() => {
    const bookmarkBtn = document.getElementById('sort-by-bookmark')
    const latestBtn = document.getElementById('sort-by-latest')

    if (sort === 'bookmarkCount') {
      bookmarkBtn.style.color = '#4d4d4e'
      bookmarkBtn.style.borderColor = '#707070'
      bookmarkBtn.style.fontWeight = 'bold'

      latestBtn.style.color = '#6a737d'
      latestBtn.style.borderColor = '#cdcdd5'
      latestBtn.style.fontWeight = 'normal'
    } else {
      bookmarkBtn.style.color = '#6a737d'
      bookmarkBtn.style.borderColor = '#cdcdd5'
      bookmarkBtn.style.fontWeight = 'normal'

      latestBtn.style.color = '#4d4d4e'
      latestBtn.style.borderColor = '#707070'
      latestBtn.style.fontWeight = 'bold'
    }
  }, [sort])
  const getQuestion = useCallback(async () => {
    await axios
      .get(`/api/v1/question/${questionId}`)
      .then((res) => {
        console.log(res.data)
        setQuesitonContent(res.data.content)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  useEffect(() => {
    setQuestionId(window.location.search.slice(1, window.location.search.length))
    console.log('문제받아오기')
    getQuestion()
  })

  return (
    <div>
      <div className="question-detail-content">
        <h1>문제 설명</h1>
        <span>{questionContent}</span>
      </div>
      <div className="question-detail-answer">
        <span>나의 답변</span>
        <AnswerList />
      </div>
      <div className="question-detail-others">
        <h2>다른 사람의 답변</h2>
        <button
          id="sort-by-latest"
          onClick={() => {
            setSort('createdDate')
          }}>
          최신순
        </button>
        <button
          id="sort-by-bookmark"
          onClick={() => {
            setSort('bookmarkCount')
          }}>
          인기순
        </button>
      </div>
      <div className="queiston-detail-others-answer">
        <div id="hr-line" />
        <AnswerList />
      </div>
    </div>
  )
}

export default QuestionDetail
