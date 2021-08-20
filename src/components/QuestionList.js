import React, { useCallback, useEffect, useState } from 'react'
import 'css/Navigation.css'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import Question from 'components/Question'

const QuestionList = (props) => {
  const [allQuestions, setAllQuestions] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [page, setPage] = useState(0)
  // const [ref, inView] = useInView()
  // const [stopRequest, setStopRequest] = useState(false)
  // const [allReRender, setAllReRender] = useState(false)
  const [notExist, setNotExist] = useState('')
  const [sort, setSort] = useState(props.sortBy)

  const getQuestions = useCallback(async () => {
    // if (!stopRequest) {
    //   setLoading(true)
    const questions = []
    let getUrl = `/api/v1/question/search?keyword=${props.word}&page=0&size=20&tags=${props.tagList}&sort=${props.sortBy},desc`
    if (props.type === 'question') {
      getUrl = `/api/v1/question/mine?page=0&size=20&sort=${props.sortBy},desc`
      await axios
        .get(getUrl)
        .then((res) => {
          res.data.forEach((item) => {
            if (item.mostLikedAnswer === null) item.mostLikedAnswer = { content: '(등록된 답변이 없습니다)' }
            questions.push(item)
          })
          setAllQuestions(questions)
        })
        .catch((err) => {
          console.log(err)
        })
    } else if (props.type === 'bookmark') {
      getUrl = `/api/v1/bookmark/mine?page=0&size=20&sort=${props.sortBy}`
      await axios
        .get(getUrl)
        .then((res) => {
          console.log(res.data)
          res.data.forEach((item) => {
            if (item.mostLikedAnswer === null) item.mostLikedAnswer = { content: '(등록된 답변이 없습니다)' }
            questions.push(item.question)
          })
          setAllQuestions(questions)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      await axios
        .get(getUrl)
        .then((res) => {
          res.data.forEach((item) => {
            if (item.mostLikedAnswer === null) item.mostLikedAnswer = { content: '(등록된 답변이 없습니다)' }
            questions.push(item)
          })
          setAllQuestions(questions)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // }
    // setLoading(false)
    if (questions.length === 0) {
      setNotExist('등록된 문제가 없습니다.')
    } else {
      setNotExist('')
    }
  }, [])

  // useEffect(() => {
  //   if (inView && !loading && !stopRequest) {
  //     setPage((p) => p + 1)
  //   }
  // }, [stopRequest, inView, loading])

  useEffect(() => {
    getQuestions()
  }, [getQuestions, sort])

  // useEffect(() => {
  //   if (props.tagList.length !== 0) {
  //     setPage(0)
  //     setStopRequest(false)
  //     setAllQuestions([])
  //     setAllReRender(true)
  //   } else if (allReRender) {
  //     setPage(0)
  //     setStopRequest(false)
  //     setAllQuestions([])
  //     setAllReRender(true)
  //   } else if (props.word.length > 0) {
  //     setAllQuestions([])
  //     setPage(0)
  //     setStopRequest(false)
  //     setAllReRender(true)
  //   } else if (sort !== props.sortBy) {
  //     setSort(props.sortBy)
  //     setAllQuestions([])
  //     setPage(0)
  //     setStopRequest(false)
  //     setAllReRender(true)
  //   }
  // }, [props.tagList, props.sortBy])

  return (
    <div>
      {allQuestions.map((ques, index) => (
        <div key={index}>
          {allQuestions.length - 1 === index ? (
            <div>
              <Question
                key={ques.id}
                id={ques.id}
                number={index + 1}
                content={ques.content}
                tagList={ques.tagList}
                answer={ques.mostLikedAnswer.content}
              />
            </div>
          ) : (
            <div>
              <Question
                key={ques.id}
                id={ques.id}
                number={index + 1}
                content={ques.content}
                tagList={ques.tagList}
                answer={ques.mostLikedAnswer.content}
              />
            </div>
          )}
        </div>
      ))}
      {notExist}
    </div>
  )
}
export default QuestionList
