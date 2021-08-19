import 'css/QuestionSearch.css'
import Tags from 'components/Tags.js'
import { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import InfiniteQuestionList from 'components/InfiniteQuestionList'

// xd 복붙 시작 -->
const searchIcon = () => {
  return (
    <div className="search-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="13.455" height="14.982" viewBox="0 0 13.455 14.982">
        <g id="그룹_2183" data-name="그룹 2183" transform="translate(-110.75 -693.75)">
          <g
            id="타원_4"
            data-name="타원 4"
            transform="translate(110.75 693.75)"
            fill="none"
            stroke="#554da0"
            strokeLinecap="round"
            strokeWidth="1">
            <circle cx="5.5" cy="5.5" r="5.5" stroke="none" />
            <circle cx="5.5" cy="5.5" r="5" fill="none" />
          </g>
          <line
            id="선_9"
            data-name="선 9"
            x2="4.029"
            y2="4.616"
            transform="translate(119.471 703.41)"
            fill="none"
            stroke="#554da0"
            strokeLinecap="round"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  )
}
// <-- xd 복붙 끝

const QuestionSearch = () => {
  const [searchWord, setSearchWord] = useState('')
  const [questionSearchTag, setQuestionSearchTag] = useState([])
  const [questionSearchWord, setQuestionSearchWord] = useState('')
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
    <div className="question-search">
      <div className="question-search-info-detail">
        알고싶은
        <br />
        문제종류와 키워드를
        <br />
        검색하세요!
      </div>
      <div className="question-search-tag">
        <img src="img/figure1.png" alt="question-search-tag-icon" />
        <span>문제 검색</span>
        <div className="question-tag-hr"></div>
        <Tags className="question-tags" page="question-search" />
      </div>
      <div className="question-search-word">
        <Input
          id="question-search-input"
          type="textarea"
          value={searchWord}
          maxLength="20"
          onChange={(e) => {
            setSearchWord(e.target.value)
          }}
          placeholder="관련어를 검색해주세요"
        />
        {searchIcon()}
        <button
          onClick={() => {
            const tagList = localStorage.getItem('questionSearchTag')
            const questionSerachTagArr = JSON.parse(tagList)
            setQuestionSearchTag(questionSerachTagArr)
            setQuestionSearchWord(searchWord)
            setSearchWord('')
          }}>
          검색하기
        </button>
      </div>
      <div className="searched-question">
        <div className="title-sort">
          <img src="img/figure3.png" alt="question-search-tag-icon" />

          <span>검색된 면접 문제</span>
          <div className="sort-button">
            <button
              id="sort-by-bookmark"
              onClick={() => {
                setSort('bookmarkCount')
              }}>
              인기순
            </button>
            <button
              id="sort-by-latest"
              onClick={() => {
                setSort('createdDate')
              }}>
              최신순
            </button>
            <div className="question-search-hr" />
          </div>
        </div>
        <div className="question-section">
          <InfiniteQuestionList tagList={questionSearchTag} sortBy={sort} word={questionSearchWord} type="" />

          {/* <QuestionList tagList={questionSearchTag} sortBy={sort} word={questionSearchWord} type={''} /> */}
        </div>
      </div>
    </div>
  )
}
export default QuestionSearch
