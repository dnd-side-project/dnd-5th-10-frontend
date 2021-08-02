import 'components/QuestionRegister.css'
import Tags from 'components/Tags'
import { useEffect, useState } from 'react'
import { Form, Input, Button } from 'reactstrap'

const questionRegisterImg = '/img/questionRegister.jpg'
const QuestionRegister = () => {
  const [textContents, setTextContents] = useState('')
  const [textContentsLength, setTextContentsLength] = useState(0)
  // const [checkTextLength, setCheckTextLength] = useState(textContentsLength + '/1000')

  useEffect(() => {
    setTextContentsLength(textContents.length)
    const textArea = document.getElementById('text-counts')
    if (textContentsLength >= 1000) {
      // setCheckTextLength('최대 글자수는 1000자 입니다')
      textArea.style.setProperty('color', 'red')
    } else {
      // setCheckTextLength(textContentsLength + '/1000')
      textArea.style.setProperty('color', 'black')
    }
  })

  return (
    <div className="question-register">
      <div className="question-register-img">
        <img src={questionRegisterImg} alt="question-register-img" />
        <h1>문제 등록 페이지</h1>
        <h3>문제를 등록해주셈</h3>
      </div>
      <div className="question-register-input">
        <Form>
          <h1>문제를 입력하삼</h1>
          <span id="text-counts">
            {/* ({checkTextLength}) */}({textContentsLength}/1000)
          </span>
          <hr />
          <Input
            type="textarea"
            value={textContents}
            maxLength="1000"
            onChange={(e) => {
              setTextContents(e.target.value)
            }}
            id="question-contents"
            placeholder="여기에 입력해바"
          />
        </Form>
        <hr />
        <div className="quesiton-register-tags">
          <h2>zz</h2>
          <Tags id="register-tags" />
          <Button>완료오</Button>
        </div>
      </div>
    </div>
  )
}
export default QuestionRegister
