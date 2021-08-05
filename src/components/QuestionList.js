import React, { useEffect, useState } from 'react'
import 'css/Navigation.css'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'
import Question from 'components/Question'

const QuestionList = () => {
  const [allQuestions, setAllQuestions] = useState([])

  useEffect(() => {
    if (JWT_TOKEN) {
      axios
        .get(`/api/v1/question/all/`)
        .then((res) => {
          let questions = []
          res.data.forEach((item) => {
            questions.push(item)
          })
          setAllQuestions(questions)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])

  const showQuestions = allQuestions.map((ques, index) => {
    let quesContent = ques.content
    // quesContent = quesContent.slice(0, 20)
    return (
      <Question
        key={ques.id}
        id={ques.id}
        number={index + 1}
        content={quesContent}
        username={ques.username}
        tagList={ques.tagList}
        bookmarkCount={ques.bookmarkCount}
      />
    )
  })

  return (
    <div>
      {showQuestions}
      {console.log(allQuestions)}
    </div>
  )
}
export default QuestionList
