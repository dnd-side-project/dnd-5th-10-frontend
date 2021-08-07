import 'components/SetQuizOptions.css'
import { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import tagItems from 'constants/TagItems'

const questionRegisterImg = '/img/questionRegister.jpg'

const SetQuizOptions = () => {
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false)
  const [cntDropdownOpen, setCntDropdownOpen] = useState(false)
  const tagToggle = () => setTagDropdownOpen((prevState) => !prevState)
  const cntToggle = () => setCntDropdownOpen((prevState) => !prevState)

  const [selectedQuizTag, setselectedQuizTag] = useState([])
  const [selectedQuizCnt, setSelectedQuizCnt] = useState(null)

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
  // 최대 문제 선택 갯수
  const quizCnt = new Array(30).fill().map((cnt, i) => {
    return i
  })
  const quizMinToMax = quizCnt.slice(4, 30)

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
            <DropdownMenu className="dropdown-menu">
              {tagItems.map((tagItem, i) => {
                return (
                  <DropdownItem key={i} onClick={selectedTag} id={tagItem.name}>
                    {tagItem.name}
                  </DropdownItem>
                )
              })}
            </DropdownMenu>
          </Dropdown>
        </div>
        {console.log(selectedQuizTag)}
        <div className="select-quiz-count">
          <h4>갯수</h4>
          <hr className="line" />
          <Dropdown isOpen={cntDropdownOpen} toggle={cntToggle}>
            <DropdownToggle caret>퀴즈 갯수 선택</DropdownToggle>
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
        {console.log(selectedQuizCnt)}
      </div>
      <div className="quiz-setting-result-box">
        <div>
          <h4>선택된 퀴즈 태그</h4>
          <hr className="two-line" />
          {selectedQuizTag.map((selectedTag, i) => {
            return (
              <Button className="selected-tag-btn" key={i} id={selectedTag} onClick={deselectedTag}>
                {selectedTag} X
              </Button>
            )
          })}
        </div>
        <div>
          <h4>선택된 퀴즈 수</h4>
          <hr className="two-line" />
          <h1>{selectedQuizCnt} 개</h1>
        </div>
        <Button className="quiz-start-btn">시작하기</Button>
      </div>
    </div>
  )
}

export default withRouter(SetQuizOptions)
