import 'css/MyBookmarkQuestion.css'
import MyPageProfile from 'components/MyPageProfile'
import { useState, useEffect } from 'react'
import QuestionList from 'components/QuestionList'

const MyBookmarkQuestion = () => {
  const [sort, setSort] = useState('question_bookmarkCount')

  useEffect(() => {
    const bookmarkBtn = document.getElementById('sort-by-bookmark')
    const latestBtn = document.getElementById('sort-by-latest')

    if (sort === 'question_bookmarkCount') {
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
  return (
    <div className="mypage-register-bookmark">
      <MyPageProfile />
      <div className="mypage-register-bookmark-question">
        <div className="mypage-register-bookmark-title">
          <span>
            <img src="/img/mypage_icon4.png" alt="mypage-register-bookmark-icon" />
            내가 북마크한 문제
          </span>
          <button
            id="sort-by-latest"
            onClick={() => {
              setSort('question_createdDate')
            }}>
            최신순
          </button>
          <button
            id="sort-by-bookmark"
            onClick={() => {
              setSort('question_bookmarkCount')
            }}>
            인기순
          </button>
        </div>
        <QuestionList tagList={[]} sortBy={sort} word={''} type={'bookmark'} />
      </div>
    </div>
  )
}

export default MyBookmarkQuestion
