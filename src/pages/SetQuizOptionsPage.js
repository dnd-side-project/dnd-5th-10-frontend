import SetQuizOptions from 'components/SetQuizOptions'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const questionRegisterImg = '/img/questionRegister.jpg'
const SetQuizOptionsPage = () => {
  return (
    <div>
      <Navigation />
      <div className="set-quiz-options-img">
        <img src={questionRegisterImg} alt="question-register-img" />
        <h1>퀴즈 옵션 세팅 페이지</h1>
        <h3>퀴즈 옵션을 선택해주세요</h3>
      </div>
      <div className="body">
        <SetQuizOptions />
      </div>
      <Footer />
    </div>
  )
}
export default SetQuizOptionsPage
