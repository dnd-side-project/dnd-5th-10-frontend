import React, { useCallback, useEffect, useState } from 'react'
import 'css/Navigation.css'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import Question from 'components/Question'

const QuestionList = () => {
  const [allQuestions, setAllQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [ref, inView] = useInView()
  const [stopRequest, setStopRequest] = useState(false)

  const getQuestions = useCallback(async () => {
    if (!stopRequest) {
      setLoading(true)
      let questions = allQuestions

      await axios
        .get(`/api/v1/question/all?page=${page}&size=3`)
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
      setLoading(false)
    }
  }, [stopRequest, allQuestions, page])

  useEffect(() => {
    if (inView && !loading && !stopRequest) {
      setPage((p) => p + 1)
      // console.log(page)
    }
  }, [stopRequest, inView, loading])

  useEffect(() => {
    getQuestions()
  }, [getQuestions])

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
    </div>
  )
}
export default QuestionList
