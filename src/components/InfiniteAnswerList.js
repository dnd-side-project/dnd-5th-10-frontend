import axios from 'axios'
import InfiniteAnswer from 'components/InfiniteAnswer'
import { useEffect, useState, useCallback } from 'react'
import Question from 'components/Question'
import { useInView } from 'react-intersection-observer'
import Answer from 'components/Answer'

const InfiniteAnswerList = (props) => {
  const [allAnswers, setAllAnswers] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [ref, inView] = useInView()
  const [stopRequest, setStopRequest] = useState(false)
  const [allReRender, setAllReRender] = useState(false)
  const [notExist, setNotExist] = useState('')

  const [questionId, setQuestionId] = useState(props.question)
  const [questionTitle, setQuestionTitle] = useState(props.title)
  const [sort, setSort] = useState('liked')

  const getAnswers = useCallback(async () => {
    console.log('gogo')
    if (!stopRequest) {
      setLoading(true)
      let answers = allAnswers
      let getUrl = `/api/v1/answer/question/${questionId}?page=${page}&size=3&sort=${sort},desc`
      if (props.type === 'myanswer') {
        getUrl = `/api/v1/answer/mine?page=${page}&size=13&sort=${sort},desc`
      } else {
        getUrl = `/api/v1/answer/question/${questionId}?page=${page}&size=3&sort=${sort},desc`
      }
      await axios
        .get(getUrl)
        .then((res) => {
          // console.log(res.data.content.length)
          if (res.data.content.length > 0) {
            res.data.content.forEach((item) => {
              // if (answers.length < 1) {
              answers.push(item)
              // } else {
              //   let check = true
              //   answers.forEach((ans) => {
              //     if (JSON.stringify(ans) === JSON.stringify(item)) {
              //       check = false
              //     }
              //   })
              //   if (check) {
              //     answers.push(item)
              //   }
              // }
            })
            setAllAnswers(answers)
            setLoading(false)
            if (res.data.content.length == 0) {
              console.log('stop')
              setStopRequest(true)
            }
          }
        })
        .catch((err) => console.log(err))
      console.log(allAnswers)
    }
    setLoading(false)
    if (allAnswers.length === 0) {
      setNotExist('There is no answer')
    } else {
      setNotExist('')
    }
  }, [stopRequest, allAnswers, page, props.sortBy])

  useEffect(() => {
    if (inView && !loading && !stopRequest) {
      setPage((p) => p + 1)
    }
  }, [stopRequest, inView, loading])

  useEffect(() => {
    getAnswers()
  }, [getAnswers])

  useEffect(() => {
    if (allReRender) {
      setPage(0)
      setStopRequest(false)
      setAllAnswers([])
      setAllReRender(true)
    } else if (sort !== props.sortBy) {
      console.log(props.sortBy)
      console.log(sort)
      setSort(props.sortBy)
      setPage(0)
      setStopRequest(false)
      setAllAnswers([])
      setAllReRender(true)
    }
  }, [props.sortBy])

  return (
    <div>
      {props.type === 'myanswer'
        ? allAnswers.map((ans, index) => (
            <div key={index}>
              {allAnswers.length - 1 === index ? (
                <div ref={ref}>
                  <Question
                    key={ans.id}
                    id={ans.id}
                    number={index + 1}
                    content={ans.question.content}
                    answer={ans.content}
                    tagList={ans.question.tagList}
                  />
                </div>
              ) : (
                <div>
                  <Question
                    key={ans.id}
                    id={ans.id}
                    number={index + 1}
                    content={ans.question.content}
                    answer={ans.content}
                    tagList={ans.question.tagList}
                  />
                </div>
              )}
            </div>
          ))
        : allAnswers.map((ans, index) => (
            <div key={index}>
              {allAnswers.length - 1 === index ? (
                <div ref={ref}>
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
              ) : (
                <div>
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
              )}
            </div>
          ))}
    </div>
  )
}
export default InfiniteAnswerList
