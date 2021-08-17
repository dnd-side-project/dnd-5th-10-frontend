import 'css/MainPage.css'
import MainCarousel from 'components/MainCarousel'
import Tags from 'components/Tags'
import { Link, useHistory } from 'react-router-dom'
import { JWT_TOKEN } from 'constants/Oauth'
import axios from 'axios'
import { useEffect } from 'react'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
// header 설정
axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

function MainPage() {
  const history = useHistory()

  let searchEx
  let registerEx
  let mypageEx
  let quizEx

  let searchExBtn
  let registerExBtn
  let mypageExBtn
  let quizExBtn

  useEffect(() => {
    searchEx = document.getElementById('search-ex')
    registerEx = document.getElementById('register-ex')
    mypageEx = document.getElementById('mypage-ex')
    quizEx = document.getElementById('quiz-ex')

    searchExBtn = document.getElementById('search-ex-btn')
    registerExBtn = document.getElementById('register-ex-btn')
    mypageExBtn = document.getElementById('mypage-ex-btn')
    quizExBtn = document.getElementById('quiz-ex-btn')

    searchExBtn.style.borderBottom = '0.01px solid #2f00ff'
  }, [])

  const removeLocalStorage = () => {
    localStorage.removeItem('questionSearchTag')
  }

  return (
    <div className="Main">
      <Navigation />
      {removeLocalStorage()}
      <MainCarousel />
      <div className="body">
        <div className="main-mypage-box">
          <div>
            IT'erview를 <br />
            알아가 볼까요?
          </div>
          <h1>마이페이지</h1>
          <span>마이페이지에서 나의 IT'erview 기록들을 확인해보세요!</span>
          <Link to="/MyPage/MyRegisterQuestion">
            <button className="main-mypage-btn">마이 페이지</button>
          </Link>
        </div>
        <div className="intro-functions">
          <button
            id="search-ex-btn"
            onClick={() => {
              searchEx.style.display = 'inline'
              mypageEx.style.display = 'none'
              quizEx.style.display = 'none'
              registerEx.style.display = 'none'

              registerExBtn.style.border = 0
              mypageExBtn.style.border = 0
              quizExBtn.style.border = 0
              searchExBtn.style.borderBottom = '0.01px solid #2f00ff'
            }}>
            <span>문제 검색</span>
          </button>
          <button
            id="register-ex-btn"
            onClick={() => {
              registerEx.style.display = 'inline'
              mypageEx.style.display = 'none'
              quizEx.style.display = 'none'
              searchEx.style.display = 'none'

              searchExBtn.style.border = 0
              mypageExBtn.style.border = 0
              quizExBtn.style.border = 0
              registerExBtn.style.borderBottom = '0.01px solid #2f00ff'
            }}>
            <span>문제 등록</span>
          </button>
          <button
            id="mypage-ex-btn"
            onClick={() => {
              mypageEx.style.display = 'inline'
              quizEx.style.display = 'none'
              searchEx.style.display = 'none'
              registerEx.style.display = 'none'

              searchExBtn.style.border = 0
              registerExBtn.style.border = 0
              quizExBtn.style.border = 0
              mypageExBtn.style.borderBottom = '0.01px solid #2f00ff'
            }}>
            <span>마이페이지</span>
          </button>
          <button
            id="quiz-ex-btn"
            onClick={() => {
              quizEx.style.display = 'inline'
              mypageEx.style.display = 'none'
              searchEx.style.display = 'none'
              registerEx.style.display = 'none'

              searchExBtn.style.border = 0
              registerExBtn.style.border = 0
              mypageExBtn.style.border = 0
              quizExBtn.style.borderBottom = '0.01px solid #2f00ff'
            }}>
            <span>퀴즈</span>
          </button>
          <hr className="intro-hr" />
          <div className="function-explain">
            <span id="search-ex">문제 검색 기능을 통해 태그와 키워드로 원하는 문제를 검색해보세요!</span>
            <span id="register-ex">문제 등록 기능을 통해 궁금했던 문제를 등록하여 다른사람의 답변을 받아보세요!</span>
            <span id="mypage-ex">마이페이지 기능을 통해 나의 IT'erview 기록들을 확인해보세요!</span>
            <span id="quiz-ex">퀴즈 기능을 통해 모의 면접을 경험해보세요!</span>
          </div>
        </div>
        <div className="main-question-section">
          <div>
            <h1 className="search-title">
              <img src="/img/figure1.png" alt="figure1_icon" />
              문제 검색
            </h1>
            <hr className="search-hr" />
            <span className="search-subtext">
              일일이 찾아야 했던 면접 질문과 답변들, 검증되지 않았던 정보들, 한번에 검색하고 검증된 정보를 받아보세요.
            </span>
            <div className="main-question-search-tag">
              <Tags page="main-question-search" />
            </div>
            <button
              className="main-search-btn"
              onClick={() => {
                history.push('/QuestionSearch')
              }}>
              검색하기
            </button>
          </div>
          <div>
            <h1 className="register-title">
              <img src="/img/figure2.png" alt="figure1_icon" />
              문제 등록
            </h1>
            <hr className="register-hr" />
            <span className="register-subtext">
              면접문제를 어떻게 풀어야할지 막막하시죠? 어려운 문제를 등록해주세요. 함께 해결해드릴게요. <br />
              나의 의견과 다른 분들의 답변과 비교해보시고, 마음에 드는 답변을 모아보세요.
            </span>
            <button
              className="main-register-btn"
              onClick={() => {
                history.push('/QuestionRegister')
              }}>
              등록하기
            </button>
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  )
}

export default MainPage
