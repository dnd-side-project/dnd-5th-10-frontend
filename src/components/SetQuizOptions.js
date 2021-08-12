import 'css/SetQuizOptions.css'
import { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import tagItems from 'constants/TagItems'
import axios from 'axios'
import QuizSolving from './QuizSolving'

const questionRegisterImg = '/img/questionRegister.jpg'
const SetQuizOptions = (props) => {
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false)
  const [cntDropdownOpen, setCntDropdownOpen] = useState(false)
  const tagToggle = () => setTagDropdownOpen((prevState) => !prevState)
  const cntToggle = () => setCntDropdownOpen((prevState) => !prevState)

  const [selectedQuizTag, setselectedQuizTag] = useState([])
  const [selectedQuizCnt, setSelectedQuizCnt] = useState(null)

  const quizCnt = new Array(30).fill().map((cnt, i) => {
    return i
  })
  const quizMinToMax = quizCnt.slice(4, 30)

  const quizTag = localStorage.getItem('selectedQuizTag')
  const quizTagArr = JSON.parse(quizTag)
  const quizSize = localStorage.getItem('selectedQuizCnt')

  const [allQuiz, setAllQuiz] = useState([])
  const [request, setRequest] = useState(false)

  let quiz = allQuiz
  const selectedTag = (e) => {
    if (selectedQuizTag.length > 9) {
      alert('지정할 수 있는 태그는 최대 10개입니다')
    }
    if (!selectedQuizTag.includes(e.target.id) && selectedQuizTag.length <= 9) {
      setselectedQuizTag(selectedQuizTag.concat(e.target.id))
    } else if (selectedQuizTag.includes(e.target.id)) {
      alert('이미 선택된 태그입니다.')
    }
  }
  const deselectedTag = (e) => {
    setselectedQuizTag(selectedQuizTag.filter((element) => element !== e.target.id))
  }
  const selectedCnt = (e) => {
    setSelectedQuizCnt(e.target.id)
  }

  return (
    <div>
      {allQuiz.length === 0 ? (
        <div>
          <div className="set-quiz-options">
            <div className="set-quiz-options-img">
              <img src={questionRegisterImg} alt="question-register-img" />
              <h1>퀴즈 옵션 세팅 페이지</h1>
              <h3>퀴즈 옵션을 선택해주세요</h3>
            </div>
            <div className="set-quiz-options-box">
              <div className="user-info">
                <div className="user-info-content">
                  <h4>{localStorage.getItem('userName')}</h4>
                  <hr className="line" />
                  <h6>문제당 평균 시간</h6>
                  <h6>좋아요</h6>
                  <h6>퀴즈로 푼 문제</h6>
                </div>
              </div>
              <div className="select-tag">
                <div className="select-tag-content">
                  <h4>
                    퀴즈태그<span className="comments">*미선택시 랜덤출제</span>
                  </h4>

                  <hr className="line" />
                  <Dropdown isOpen={tagDropdownOpen} toggle={tagToggle}>
                    <DropdownToggle className="quiz-dropdown" caret>
                      태그 선택
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      {tagItems.map((tagItem, i) => {
                        return (
                          <DropdownItem key={i} onClick={selectedTag} id={tagItem.name}>
                            {tagItem.name} {localStorage.setItem('selectedQuizTag', JSON.stringify(selectedQuizTag))}
                          </DropdownItem>
                        )
                      })}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <div className="select-quiz-count">
                <div className="select-quiz-count-content">
                  <h4>갯수</h4>
                  <hr className="line" />
                  <Dropdown isOpen={cntDropdownOpen} toggle={cntToggle}>
                    <DropdownToggle className="quiz-dropdown" caret>
                      퀴즈 갯수 선택
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      {quizMinToMax.map((cnt, i) => {
                        return (
                          <DropdownItem key={i} onClick={selectedCnt} id={cnt + 1}>
                            {cnt + 1}
                          </DropdownItem>
                        )
                      })}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              {/* {console.log(selectedQuizCnt)} */}
            </div>
            <div className="quiz-setting-result-box">
              <div>
                <h4>선택된 퀴즈 태그</h4>
                <hr className="two-line" />
                {selectedQuizTag.map((selectedTag, i) => {
                  return (
                    <Button className="selected-tag-btn" key={i} id={selectedTag} onClick={deselectedTag}>
                      {selectedTag} ⅹ
                    </Button>
                  )
                })}
                {console.log(quizTagArr)}
              </div>
              <div>
                <h4>선택된 퀴즈 수</h4>
                <hr className="two-line" />
                <span className="quiz-cnt">
                  {selectedQuizCnt}
                  {localStorage.setItem('selectedQuizCnt', parseInt(selectedQuizCnt))}
                </span>
                <span>개</span>
              </div>
              <Button
                className="quiz-start-btn"
                onClick={() => {
                  setRequest(true)
                  if (request) {
                    axios
                      .get(`/api/v1/question/quiz?size=${quizSize}&tags=${quizTagArr}`)
                      .then((res) => {
                        res.data.forEach((item) => {
                          quiz.push(item)
                        })
                        console.log(allQuiz)
                        setAllQuiz(allQuiz)
                        setRequest(false)
                      })
                      .catch((err) => {
                        window.alert('퀴즈 갯수를 선택해주세요.')
                      })
                  }
                }}>
                시작하기
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <QuizSolving quiz={allQuiz}></QuizSolving>
      )}
    </div>
  )
}
export default withRouter(SetQuizOptions)
