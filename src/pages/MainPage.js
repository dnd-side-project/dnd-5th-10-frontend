import MainCarousel from 'components/MainCarousel'
import ClassificationTags from 'components/ClassificationTags'
import { Link } from 'react-router-dom'
import { JWT_TOKEN } from 'constants/Oauth'
import axios from 'axios'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
// header 설정
axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

function MainPage() {
  return (
    <>
      <Navigation />

      <div className="Main">
        <MainCarousel />
        <div className="body">
          <ClassificationTags />
          <Link to="/QuestionRegister">문제 등록</Link>
          <br />
          <Link to="/SetQuizOptions">퀴즈풀러가기</Link>
          <br />
          <Link to="/QuestionSearch">문제 검색하러 가기</Link>
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MainPage
