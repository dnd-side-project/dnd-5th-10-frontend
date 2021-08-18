import 'css/MyLikeAnswer.css'
import MyPageProfile from 'components/MyPageProfile'
import { useState, useEffect } from 'react'
import InfiniteAnswerList from 'components/InfiniteAnswerList'

const MyLikeAnswer = () => {
  const [sort, setSort] = useState('answerManager_liked')

  useEffect(() => {
    const likeBtn = document.getElementById('sort-by-like')
    const latestBtn = document.getElementById('sort-by-latest')

    if (sort === 'answerManager_liked') {
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

  return (
    <div className="mypage-register-like">
      <MyPageProfile />
      <div className="mypage-register-like-question">
        <div className="mypage-register-question-title">
          <span>
            <img src="/img/mypage_icon3.png" />
            내가 좋아요한 답변
          </span>
          <button
            id="sort-by-latest"
            onClick={() => {
              setSort('answerManager_CreatedDate')
            }}>
            최신순
          </button>
          <button
            id="sort-by-like"
            onClick={() => {
              setSort('answerManager_liked')
            }}>
            인기순
          </button>
        </div>
        <InfiniteAnswerList question={-1} title="" sortBy={sort} type="mylike" />
      </div>
    </div>
  )
}

export default MyLikeAnswer
