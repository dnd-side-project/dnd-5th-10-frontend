import 'css/QuestionRegister.css'
import Tags from 'components/Tags'
import { useEffect, useState } from 'react'
import { Form, Input, Button } from 'reactstrap'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Question from './Question'

const QuestionRegister = ({ history }) => {
  const [textContents, setTextContents] = useState('')
  const [textContentsLength, setTextContentsLength] = useState(0)
  const [register, setRegister] = useState(false)
  const [questionRegiTagArr, setQuestionRegiTagArr] = useState([])

  useEffect(() => {
    setTextContentsLength(textContents.length)
    const textArea = document.getElementById('text-counts')
    if (textContentsLength < 20 && !register) {
      textArea.style.setProperty('color', 'red')
    } else if (textContentsLength >= 1000 && !register) {
      // setCheckTextLength('최대 글자수는 1000자 입니다')
      textArea.style.setProperty('color', 'red')
    } else if (!register) {
      // setCheckTextLength(textContentsLength + '/1000')
      textArea.style.setProperty('color', 'black')
    }
  }, [textContents.length, textContentsLength])

  const registerQuestionAndTags = () => {
    if (textContents.length < 20) {
      window.alert('최소 20자 이상 입력해주세요')
    } else {
      const questionRegiTag = localStorage.getItem('questionRegiTag')
      const questionTag = JSON.parse(questionRegiTag)

      console.log(localStorage.getItem('userName'))
      axios({
        method: 'post',
        url: '/api/v1/question',
        data: {
          content: textContents,
          bookmarkCount: 0,
          tags: questionTag,
        },
        params: {
          name: localStorage.getItem('userName'),
        },
      })
        .then((res) => {
          console.log(res)
          window.alert('문제가 등록되었습니다.')
          setRegister(true)
        })
        .catch((err) => {
          console.log(err)
          window.alert('문제가 등록되지 않았습니다.')
          window.location.reload()
        })
      setQuestionRegiTagArr(questionTag)
    }
  }

  const showQuestionTags = questionRegiTagArr.map((item, index) => {
    if (index < 3) {
      return (
        <div className="question-register-after-tags" key={index}>
          {item}
        </div>
      )
    } else {
      return <div key={index}></div>
    }
  })

  return (
    <div className="question-register">
      <div className="question-register-info-detail">
        알고싶은
        <br />
        문제를 작성하고
        <br />
        태그를 걸어주세요!
      </div>
      {register ? (
        <>
          <div className="question-register-after">
            <div className="question-register-after-content">
              <span>
                문제 등록이 완료되었습니다!
                <br />
                마이페이지로 돌아가 문제에 대한 답변을 작성해보세요.
              </span>
              <div className="question-register-after-question">
                <h1>01</h1>
                <h2>{textContents}</h2>
                {/* {questionRegiTagArr} */}
                {showQuestionTags}
              </div>

              <button
                className="question-register-after-btn2"
                onClick={() => {
                  history.push('/')
                }}>
                홈으로 돌아가기
              </button>
              <button
                className="question-register-after-btn1"
                onClick={() => {
                  history.push('/MyPage/MyRegisterQuestion')
                }}>
                마이페이지로 가기
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="question-register-input">
            <Form>
              <h1>문제 입력</h1>
              <div className="question-register-hr" />
              <span id="text-counts">( {textContentsLength} / 1000 )</span>

              <Input
                type="textarea"
                value={textContents}
                maxLength="1000"
                onChange={(e) => {
                  setTextContents(e.target.value)
                }}
                id="question-contents"
                placeholder="알고싶은 면접 문제를 입력해주세요."
              />
            </Form>
            <div className="quesiton-register-tags">
              <h2>문제 태그 선택</h2>
              <div className="question-register-hr2" />
              <Tags page="question-register" id="register-tags" />
              <Button onClick={registerQuestionAndTags}>등록하기</Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default withRouter(QuestionRegister)
