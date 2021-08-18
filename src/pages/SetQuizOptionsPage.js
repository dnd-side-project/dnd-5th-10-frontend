import SetQuizOptions from 'components/SetQuizOptions'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const SetQuizOptionsPage = () => {
  return (
    <div id="quiz-carousel-slide">
      <Navigation />
      <div id="quiz-background">
        <img className="quiz-img" src="/img/quiz_img.png" alt="" />
        <div className="quiz-ex">
          <h1 id="quiz-middle-title">면접문제 학습</h1>
          <h3 id="quiz-sub-title">
            아직도 암기식으로 면접을 준비하시나요? <br /> 체계적으로 전략적으로 학습해보세요!
          </h3>
        </div>
        <span id="quiz-ex-box">
          풀고싶은 <br />
          문제종류와 갯수를
          <br /> 선택해주세요!
        </span>
      </div>

      <div className="body">
        <SetQuizOptions />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
export default SetQuizOptionsPage
