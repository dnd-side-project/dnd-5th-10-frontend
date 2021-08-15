import { getDefaultNormalizer } from '@testing-library/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Answer from './Answer'

const AnswerList = () => {
  // const [answerList, setAnswerList] = useState([])
  // const [skip, setSktip] = useState(0)
  // const [limit, setLimit] = useState(10)
  // const [fetching, setFetching] = useState(false)
  // useEffect(() => {
  //   const body = {
  //     skip: skip,
  //     limit: limit,
  //   }
  //   getData(body)
  // }, [])
  // const getData = (body) => {
  //   axios.get('/api/v1/answer/question/2').then((res) => {
  //     if (body.loadMore) setAnswerList([...AnswerList, ...res.data.content])
  //   })
  // }
  return (
    <div>
      <Answer number={0} content_title="문제 제목" content_answer="문제답변 문제답변 문제답변" />
    </div>
  )
}

export default AnswerList
