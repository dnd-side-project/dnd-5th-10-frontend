import 'css/MainPage.css'
import MainCarousel from 'components/MainCarousel'
import ClassificationTags from 'components/ClassificationTags'
import { Link } from 'react-router-dom'
import { JWT_TOKEN } from 'constants/Oauth'
import axios from 'axios'
// header 설정
axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

function MainPage() {
  return (
    <div className="Main">
      <MainCarousel />
      <div className="body">
        <div className="question-search-box">
          <div>
            IT'erview를 <br />
            알아가 볼까요?
          </div>
          <h1>마이페이지</h1>
          <span>마이페이지에서 나의 IT'erview 기록들을 확인해보세요!</span>
          <button>마이 페이지</button>
        </div>
        <div className="intro-functions">
          <button>
            <span id="text-question">문제 검색</span>
          </button>
          <button className="here-title">
            <span id="text-answer">문제 등록</span>
          </button>
          <button>
            <span id="text-like">좋아요한 답변</span>
          </button>
          <button>
            <span id="text-bookmark">북마크한 문제</span>
          </button>
          <hr className="intro-hr" />
        </div>
        <ClassificationTags />

        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default MainPage
