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
  )
}

export default MainPage
