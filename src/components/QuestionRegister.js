import 'components/QuestionRegister.css'
import Tags from 'components/Tags'
import { useEffect, useState } from 'react'
import { Form, Input, Button } from 'reactstrap'
import { JWT_TOKEN, API_BASE_URL } from 'constants/Oauth'
import axios from 'axios'

const questionRegisterImg = '/img/questionRegister.jpg'
const QuestionRegister = () => {
  const [textContents, setTextContents] = useState('')
  const [textContentsLength, setTextContentsLength] = useState(0)
  const [userName, setUserName] = useState('')
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

  const registerQuestionAndTags = () => {
    if (textContents.length < 20) {
      window.alert('최소 20자 이상 입력해주세요')
    }
    if (JWT_TOKEN) {
      axios
        .get(`/api/v1/user/profile/`)
        .then((res) => {
          setUserName(res.data?.username)
          console.log(userName)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    const questionRegiTag = localStorage.getItem('questionRegiTag')
    console.log(questionRegiTag)
    console.log(typeof questionRegiTag)

    axios({
      method: 'POST',
      url: `/api/v1/question`,
      data: {
        bookmark_count: 0,
        content: textContents,
        tags: questionRegiTag,
      },
      params: {
        name: userName,
      },
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
          <span id="text-counts">({textContentsLength}/1000)</span>
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
          <Tags page="question-register" id="register-tags" />
          <Button onClick={registerQuestionAndTags}>완료오</Button>
        </div>
      </div>
    </div>
  )
}

export default QuestionRegister
