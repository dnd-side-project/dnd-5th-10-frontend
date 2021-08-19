import SetQuizOptions from 'components/SetQuizOptions'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const SetQuizOptionsPage = () => {
  const setQuizOptionsImg = '/img/page_info.png'
  return (
    <>
      <Navigation />
      <img id="deem" src="/img/navigation-deem.png" />
      <div className="quiz-img">
        <div className="question-search-info-background">
          <img src={setQuizOptionsImg} alt="question-register-img" />
        </div>
        <h1 id="quiz-option-title">면접문제 학습</h1>
        <h3 id="quiz-option-sub-title">
          아직도 암기식으로 면접을 준비하시나요?
          <br />
          체계적으로 전략적으로 학습해보세요!
        </h3>
      </div>
      <br />
      <br />
      <br />
      <div className="body">
        <SetQuizOptions />
      </div>
      <Footer />
    </>
  )
}
export default SetQuizOptionsPage
