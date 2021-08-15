import { getDefaultNormalizer } from '@testing-library/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Answer from './Answer'

const AnswerList = () => {
  const [answerList, setAnswerList] = useState([])
  const [skip, setSktip] = useState(0)
  const [limit, setLimit] = useState(10)
  const [fetching, setFetching] = useState(false)
  useEffect(() => {
    const body = {
      skip: skip,
      limit: limit,
    }
    getData(body)
  }, [])
  const getData = (body) => {
    axios.get('/api/v1/answer/question/2').then((res) => {
      // console.log(res.data.content)
      // if (body.loadMore)
      setAnswerList(res.data.content)
      console.log(answerList)
    })
  }
  return (
    <div>
      <Answer
        number={1}
        content_title="문제 제목"
        content_answer={'첫번째 답변입니당. 첫ㅅ번째 답변입니다 첫번째 답변 배고파 으흥헣ㅇ'}
      />
    </div>
  )
}

export default AnswerList
