import 'css/QuizResult.css'
import { withRouter } from 'react-router-dom'
import Question from './Question'

const questionRegisterImg = '/img/questionRegister.jpg'

const QuizResult = (props) => {
  let index = 0
  let arrIndex = 0
  let keyIndex = 0
  return (
    <div className="quiz-result-page">
      <div className="set-quiz-result-img">
        <img src={questionRegisterImg} alt="question-register-img" />
        {/* {console.log(props.id, props.content, props.tag, index)} */}
        <h1>퀴즈 결과 페이지</h1>
        <h3>풀었던 문제를 확인해주세요!</h3>
      </div>
      <div className="set-quiz-result-box">
        <div className="user-quiz-result">
          <div className="user-quiz-result-content">
            <h4>{localStorage.getItem('userName')}</h4>
            <hr className="hr" />
            <h6>문제당 평균 시간</h6>
            <h6>좋아요</h6>
            <h6>퀴즈로 푼 문제</h6>
          </div>
        </div>
        <div className="selected-quiz-tag">
          <div className="selectd-quiz-tag-content">
            <h4>퀴즈 태그</h4>
            <hr className="hr2" />
            {localStorage.getItem('selectedQuizTag')}
          </div>
        </div>
        <div className="quiz-time-info">
          <div className="quiz-time-content">
            <h4>총 소요시간</h4>
            <hr className="hr3" />
          </div>
        </div>
      </div>
      <div className="solved-quiz-content">
        <div className="solved-quiz-title">
          <span>풀었던 문제</span>
          <hr className="hr4" />
          <div>
            {props.id.map(() => {
              return (
                <Question
                  key={keyIndex++}
                  id={props.id[arrIndex]}
                  number={++index}
                  content={props.content[arrIndex]}
                  tagList={props.tag[arrIndex++]}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(QuizResult)
