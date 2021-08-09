import React, { useCallback, useEffect, useState } from 'react'
import 'css/Navigation.css'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import Question from 'components/Question'

const QuestionList = (props) => {
  const [allQuestions, setAllQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [ref, inView] = useInView()
  const [stopRequest, setStopRequest] = useState(false)
  const [allReRender, setAllReRender] = useState(false)
  const [notExist, setNotExist] = useState('')

  const getQuestions = useCallback(async () => {
    if (!stopRequest) {
      setLoading(true)
      let questions = allQuestions
      await axios
        .get(
          `/api/v1/question/search?keyword=${props.word}&page=${page}&size=10&tags=${props.tagList}&sort=${props.sortBy},desc`,
        )
        .then((res) => {
          res.data.forEach((item) => {
            questions.push(item)
          })
          setAllQuestions(allQuestions)
          setLoading(false)
          if (res.data.length === 0) setStopRequest(true)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    setLoading(false)
    if (allQuestions.length === 0) {
      setNotExist('There is no question')
    } else {
      setNotExist('')
    }
  }, [stopRequest, allQuestions, page, props.tagList, props.sortBy])

  useEffect(() => {
    if (inView && !loading && !stopRequest) {
      setPage((p) => p + 1)
    }
  }, [stopRequest, inView, loading])

  useEffect(() => {
    getQuestions()
  }, [getQuestions])

  useEffect(() => {})

  useEffect(() => {
    if (props.tagList.length !== 0) {
      setPage(0)
      setStopRequest(false)
      setAllQuestions([])
      setAllReRender(true)
    } else if (allReRender) {
      setPage(0)
      setStopRequest(false)
      setAllQuestions([])
      setAllReRender(true)
    } else if (props.word.length > 0) {
      setAllQuestions([])
      setPage(0)
      setStopRequest(false)
      setAllReRender(true)
    }
  }, [props.tagList])

  return (
    <div>
      {allQuestions.map((ques, index) => (
        <div key={index}>
          {allQuestions.length - 1 === index ? (
            <div ref={ref}>
              <Question
                key={ques.id}
                id={ques.id}
                number={index + 1}
                content={ques.content}
                username={ques.username}
                tagList={ques.tagList}
                bookmarkCount={ques.bookmarkCount}
              />
            </div>
          ) : (
            <div>
              <Question
                key={ques.id}
                id={ques.id}
                number={index + 1}
                content={ques.content}
                username={ques.username}
                tagList={ques.tagList}
                bookmarkCount={ques.bookmarkCount}
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
