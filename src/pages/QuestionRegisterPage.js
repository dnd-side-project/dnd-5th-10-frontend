import QuestionRegister from 'components/QuestionRegister'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const QuestionRegisterPage = () => {
  const questionRegisterImg = '/img/questionRegister.jpg'
  return (
    <>
      <div className="question-register-img">
        <img src={questionRegisterImg} alt="question-register-img" />
        <h1>문제 등록 페이지</h1>
        <h3>문제를 등록해주셈</h3>
      </div>
      <div className="body">
        <QuestionRegister />
      </div>
    </>
  )
}
export default QuestionRegisterPage
