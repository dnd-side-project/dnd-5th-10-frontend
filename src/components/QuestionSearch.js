import 'css/QuestionSearch.css'
import Tags from 'components/Tags.js'
import { useEffect, useState } from 'react'
import { Form, Input } from 'reactstrap'
import QuestionList from './QuestionList'

const questionRegisterImg = '/img/questionRegister.jpg'

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

const QuestionSearch = () => {
  const [searchWord, setSearchWord] = useState('')
  const [questionSearchTag, setQuestionSearchTag] = useState([])

  return (
    <div className="question-search">
      <div className="question-search-img">
        <img src={questionRegisterImg} alt="question-register-img" />
        <h1>면접문제 검색</h1>
        <h3>
          이리저리 흩어진 면접질문과 답변?
          <br />
          한번에 검색하고, 검증된 답변도 확인해보세요!
        </h3>
      </div>
      <div className="question-search-tag">
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
            console.log(typeof tagList)

            const questionSerachTagArr = JSON.parse(tagList)
            console.log(Array.isArray(questionSerachTagArr))
            setQuestionSearchTag(questionSerachTagArr)
          }}>
          검색하기
        </button>
      </div>
      <div className="searched-question">
        <div className="title-sort">
          <span>검색된 면접 문제</span>
          <div className="sort-button">
            <button>인기순</button>
            <button>최신순</button>
            <div className="question-search-hr" />
          </div>
        </div>
        <div className="question-section">
          <QuestionList tagList={questionSearchTag} />
        </div>
      </div>
    </div>
  )
}
export default QuestionSearch
