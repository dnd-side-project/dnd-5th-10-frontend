import axios from 'axios'
import { useEffect, useState } from 'react'
import Answer from './Answer'

const AnswerList = (props) => {
  const [answerList, setAnswerList] = useState([])
  const [skip, setSktip] = useState(0)
  const [limit, setLimit] = useState(10)
  const [fetching, setFetching] = useState(false)
  const [answerType, setAnswerType] = useState(props.type)
  const [questionId, setQuestionId] = useState(props.question)
  const [questionTitle, setQuestionTitle] = useState(props.title)

  const username = localStorage.getItem('userName')

  useEffect(() => {
    setQuestionTitle(props.title)
    setAnswerType(props.type)
    setQuestionId(props.question)
    // console.log(questionTitle)
    // console.log(questionId)
    // console.log(answerType)
    const body = {
      skip: skip,
      limit: limit,
    }
    // setAnswerType(props.type)
    // console.log(answerType)
    getData(body)
  }, [])

  const getData = (body) => {
    console.log('zz')
    if (answerType === 'other-answer') {
      let answer = answerList
      axios.get(`/api/v1/answer/question/${questionId}`).then((res) => {
        res.data.content.forEach((item) => {
          answer.push(item)
        })
        setAnswerList(answer)
        console.log(answerList)
      })
    } else {
    }
  }

  return (
    <div>
      {console.log(answerType)}
      {answerType === 'other-answer' ? (
        <div>
          {answerList.map((ans, index) => (
            <div key={index}>
              <Answer
                key={ans.id}
                id={ans.id}
                number={index + 1}
                answer={ans.content}
                title={questionTitle}
                username={ans.username}
                like={ans.liked}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <Answer
            key={0}
            id={0}
            number={1}
            answer="zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
            title={questionTitle}
            username={username}
            like={0}
          />
        </div>
      )}
    </div>
  )
}

export default AnswerList
