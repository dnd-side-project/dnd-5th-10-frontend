import QuestionRegister from 'components/QuestionRegister'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const QuestionRegisterPage = () => {
  const questionRegisterImg = '/img/page_info.png'
  return (
    <>
      <Navigation />
      <img id="deem" src="/img/navigation-deem.png" />
      <div className="question-register-img">
        <div className="question-search-info-background">
          <img src={questionRegisterImg} alt="question-register-img" />
        </div>

        <h1>면접문제 등록</h1>
        <h3>
          답변을 확인하고 싶은 문제가 있으신가요?
          <br />
          직접 문제를 등록하고 내 답변을 비교해보세요!
        </h3>
      </div>
      <div className="body">
        <QuestionRegister />
      </div>
      <Footer />
    </>
  )
}
export default QuestionRegisterPage
