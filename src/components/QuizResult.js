import 'css/QuizResult.css'
import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Question from './Question'

const questionRegisterImg = '/img/questionRegister.jpg'

const QuizResult = (props) => {
  let index = 0
  let arrIndex = 0
  let keyIndex = 0
  const tagItem = JSON.parse(localStorage.selectedQuizTag)
  const midTitle = document.getElementById('quiz-middle-title')
  const subTitle = document.getElementById('quiz-sub-title')
  const miniBox = document.getElementById('quiz-ex-box')

  useEffect(() => {
    midTitle.innerHTML = '면접문제 결과'
    subTitle.innerHTML = '본인이 풀었던 문제를 확인해보세요!'
    miniBox.innerHTML = '푼 문제를 <br/> 확인 해주세요!'
    miniBox.style.bottom = '220px'
    miniBox.style.paddingTop = '22px'
  }, [])

  return (
    <div className="quiz-result-page">
      <div className="set-quiz-result-box">
        <div className="user-quiz-result">
          <div className="user-quiz-result-content">
            <h4>{localStorage.getItem('userName')}</h4>
            <hr className="hr" />
            <h6>문제당 평균 시간</h6>
            <span>02:50</span>
            <h6>좋아요</h6>
            <span>50</span>
            <h6>퀴즈로 푼 문제</h6>
            <span>170</span>
          </div>
        </div>
        <div className="selected-quiz-tag">
          <div className="selectd-quiz-tag-content">
            <h4>퀴즈 태그</h4>
            <hr className="hr2" />
            {tagItem.map((item, i) => {
              return (
                <button key={i} className="tag-btn">
                  {item}
                </button>
              )
            })}
          </div>
        </div>
        <div className="quiz-time-info">
          <div className="quiz-time-content">
            <h4>소요시간</h4>
            <hr className="hr3" />
            <h6>총 소요시간</h6>
            <span>00:00:00</span>
            <h6>문제당 소요시간</h6>
            <span>00:00:00</span>
          </div>
        </div>
      </div>
      <div className="solved-quiz">
        <div className="solved-quiz-title">
          <span>풀었던 문제</span>
          <div className="hr4" />
        </div>
        <div className="each-questions">
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
  )
}

export default withRouter(QuizResult)
