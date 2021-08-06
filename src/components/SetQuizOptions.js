import 'components/SetQuizOptions.css'
import Tags from 'components/Tags'
import { useEffect, useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'

const questionRegisterImg = '/img/questionRegister.jpg'

const SetQuizOptions = (props) => {
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false)
  const [cntDropdownOpen, setCntDropdownOpen] = useState(false)
  const tagToggle = () => setTagDropdownOpen((prevState) => !prevState)
  const cntToggle = () => setCntDropdownOpen((prevState) => !prevState)

  return (
    <div className="set-quiz-options">
      <div className="set-quiz-options-img">
        <img src={questionRegisterImg} alt="question-register-img" />
        <h1>퀴즈 옵션 세팅 페이지</h1>
        <h3>퀴즈 옵션을 선택해주세요</h3>
      </div>
      <div className="set-quiz-options-box">
        <div className="user-info">
          <h4>{localStorage.getItem('userName')}</h4>
          <hr className="line" />
          <h6>문제당 평균 시간</h6>
          <h6>좋아요</h6>
          <h6>퀴즈로 푼 문제</h6>
        </div>
        <div className="select-tag">
          <h4>퀴즈태그</h4>
          <hr className="line" />
          <Dropdown isOpen={tagDropdownOpen} toggle={tagToggle}>
            <DropdownToggle caret>태그 선택</DropdownToggle>
            <DropdownMenu>
              <DropdownItem text></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="select-quiz-count">
          <h4>갯수</h4>
          <hr className="line" />
          <Dropdown isOpen={cntDropdownOpen} toggle={cntToggle}>
            <DropdownToggle caret>퀴즈 갯수 선택</DropdownToggle>
            <DropdownMenu>
              <DropdownItem text></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Button className="quiz-option-btn">완료</Button>
      </div>
      <div className="quiz-setting-result-box">
        <div>선택된 퀴즈 태그</div>
        <div>선택된 퀴즈 수</div>
      </div>
    </div>
  )
}

export default withRouter(SetQuizOptions)
