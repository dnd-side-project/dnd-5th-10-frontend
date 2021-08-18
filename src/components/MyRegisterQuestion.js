import 'css/MyRegisterQuestion.css'
import MyPageProfile from 'components/MyPageProfile'
import { useState, useEffect } from 'react'
import QuestionList from 'components/QuestionList'

const MyRegisterQuestion = () => {
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

  return (
    <div className="mypage-register-question">
      <MyPageProfile />
      <div className="mypage-register-question-question">
        <div className="mypage-register-question-title">
          <span>
            <img src="/img/mypage_icon1.png" alt="mypage-register-quesiton-icon" />
            내가 등록한 문제
          </span>
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
        <QuestionList tagList={[]} sortBy={sort} word={''} type={'question'} />
      </div>
    </div>
  )
}

export default MyRegisterQuestion
