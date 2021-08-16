import { useCallback, useEffect, useState } from 'react'
import 'css/QuestionDetail.css'
import { Button } from 'reactstrap'
import axios from 'axios'
import QuestionList from './QuestionList'
import AnswerList from 'components/AnswerList'
import Answer from 'components/Answer'

import InfiniteAnswerList from 'components/InfiniteAnswerList'

// 북마크 개수, 해당되는 태그, 작성자 없음

const QuestionDetail = () => {
  const [questionId, setQuestionId] = useState(window.location.search.slice(1, window.location.search.length))
  const [questionContent, setQuesitonContent] = useState(localStorage.getItem('detailTitle'))
  const [sort, setSort] = useState('liked')

  useEffect(() => {
    const likeBtn = document.getElementById('sort-by-like')
    const latestBtn = document.getElementById('sort-by-latest')

    if (sort === 'liked') {
      likeBtn.style.color = '#4d4d4e'
      likeBtn.style.borderColor = '#707070'
      likeBtn.style.fontWeight = 'bold'

      latestBtn.style.color = '#6a737d'
      latestBtn.style.borderColor = '#cdcdd5'
      latestBtn.style.fontWeight = 'normal'
    } else {
      likeBtn.style.color = '#6a737d'
      likeBtn.style.borderColor = '#cdcdd5'
      likeBtn.style.fontWeight = 'normal'

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
    // console.log('문제받아오기')
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
        <Answer number={1} answer="zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz" title={questionContent} like={0} />
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
          id="sort-by-like"
          onClick={() => {
            setSort('liked')
          }}>
          인기순
        </button>
      </div>
      <div className="queiston-detail-others-answer">
        <div id="hr-line" />
        <InfiniteAnswerList question={questionId} title={questionContent} sortBy={sort} />
        {/* {console.log(sort)} */}
      </div>
    </div>
  )
}

export default QuestionDetail
