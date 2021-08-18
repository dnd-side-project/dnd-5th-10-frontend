import axios from 'axios'
import InfiniteAnswer from 'components/InfiniteAnswer'
import { useEffect, useState } from 'react'
import Question from 'components/Question'

const InfiniteAnswerList = (props) => {
  const [listInfo, setListInfo] = useState([])
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(10)
  const [fetching, setFetching] = useState(false)
  const [notExist, setNotExist] = useState('')

  const [questionId, setQuestionId] = useState(props.question)
  const [questionTitle, setQuestionTitle] = useState(props.title)
  const [page, setPage] = useState(0)
  const [sort, setSort] = useState(props.sortBy)

  useEffect(() => {
    setSort(props.sortBy)
    setPage(0)
    setListInfo([])
  }, [props.sortBy])

  useEffect(() => {
    setQuestionTitle(props.title)
    setQuestionId(props.question)
    const body = {
      skip: skip,
      limit: limit,
    }
    getData(body)
  })

  const getData = (body) => {
    let answer = listInfo
    let getUrl = `/api/v1/answer/question/${questionId}?page=${page}&size=10&sort=${sort},desc`
    if (props.type === 'myanswer') {
      getUrl = `/api/v1/answer/mine?page=${page}&size=4&sort=${sort},desc`
    } else if (props.type === 'mylike') {
      getUrl = `/api/v1/answer/like/mine?page=${page}&size=4&sort=${sort},desc`
    } else {
      getUrl = `/api/v1/answer/question/${questionId}?page=${page}&size=10&sort=${sort},desc`
    }

    axios
      .get(getUrl, body)
      .then((res) => {
        console.log(res.data)
        if (res.data.content.length > 0) {
          res.data.content.forEach((item) => {
            if (answer.length < 1) {
              answer.push(item)
            } else {
              let check = true
              answer.forEach((ans) => {
                if (JSON.stringify(ans) === JSON.stringify(item)) {
                  check = false
                }
              })
              if (check) {
                answer.push(item)
              }
            }
          })
          setListInfo(answer)
          setPage((p) => p + 1)
        }
      })
      .catch((err) => console.log(err))

    if (listInfo.length === 0) {
      setNotExist('There is no answer')
    } else {
      setNotExist('')
    }
  }

  const fetchMoreData = () => {
    setFetching(true)
    let tmpSkip = skip + limit
    let body = {
      skip: tmpSkip,
      limit: limit,
      loadMore: true,
    }

    getData(body)
    setSkip(tmpSkip)
    setFetching(false)
  }

  return (
    <div>
      {props.type === 'myanswer' || props.type === 'mylike' ? (
        listInfo.map((ans, index) => {
          console.log(ans)
          return (
            <Question
              key={ans.id}
              id={ans.question.id}
              number={index + 1}
              content={ans.question.content}
              answer={ans.content}
              tagList={ans.question.tagList}
            />
          )
        })
      ) : (
        <InfiniteAnswer
          questionTitle={questionTitle}
          answers={listInfo}
          fetchMoreData={fetchMoreData}
          fetching={fetching}
        />
      )}
      {notExist}
    </div>
  )
}
export default InfiniteAnswerList
