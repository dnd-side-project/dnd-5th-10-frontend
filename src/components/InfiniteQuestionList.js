import axios from 'axios'
import InfiniteQuestion from 'components/InfiniteQuestion'
import { useEffect, useState } from 'react'
import Question from 'components/Question'

const InfiniteQuestionList = (props) => {
  const [listInfo, setListInfo] = useState([])
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(10)
  const [fetching, setFetching] = useState(false)
  const [notExist, setNotExist] = useState('')

  const [page, setPage] = useState(0)
  const [sort, setSort] = useState(props.sortBy)
  const [word, setWord] = useState(props.word)
  const [tagList, setTagList] = useState(props.tagList)

  useEffect(() => {
    setSort(props.sortBy)
    setPage(0)
    setListInfo([])
  }, [props.sortBy])

  useEffect(() => {
    setWord(props.word)
    setTagList(props.tagList)
    const body = {
      skip: skip,
      limit: limit,
    }
    getData(body)
  })

  const getData = (body) => {
    const questions = listInfo.slice()

    // questions.push(listInfo)
    // console.log(questions)
    let getUrl = `/api/v1/question/search?keyword=${word}&page=${page}&size=3&tags=${tagList}&sort=${sort},desc`
    if (props.type === 'question') {
      getUrl = `/api/v1/question/mine?page=${page}&size=3&sort=${sort},desc`
      axios
        .get(getUrl, body)
        .then((res) => {
          if (res.data.length > 0) {
            res.data.forEach((item) => {
              if (item.mostLikedAnswer === null) item.mostLikedAnswer = { content: '(등록된 답변이 없습니다)' }
              if (questions.length < 1) {
                questions.push(item)
              } else {
                let check = true
                questions.forEach((ques) => {
                  if (JSON.stringify(ques) === JSON.stringify(item)) {
                    check = false
                  }
                })
                if (check) {
                  questions.push(item)
                }
              }
              console.log(item)
            })
            setListInfo(questions)
            setPage((p) => p + 1)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else if (props.type === 'bookmark') {
      getUrl = `/api/v1/bookmark/mine?page=${page}&size=10&sort=${sort}`
      axios
        .get(getUrl, body)
        .then((res) => {
          console.log(res.data)
          res.data.forEach((item) => {
            if (item.mostLikedAnswer === null) item.mostLikedAnswer = { content: '(등록된 답변이 없습니다)' }
            questions.push(item.question)
          })
          setListInfo(questions)
          setPage((p) => p + 1)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      axios
        .get(getUrl, body)
        .then((res) => {
          if (res.data.length > 0) {
            res.data.forEach((item) => {
              if (item.mostLikedAnswer === null) item.mostLikedAnswer = { content: '(등록된 답변이 없습니다)' }
              if (questions.length < 1) {
                questions.push(item)
              } else {
                let check = true
                questions.forEach((ques) => {
                  if (JSON.stringify(ques) === JSON.stringify(item)) {
                    check = false
                  }
                })
                if (check) {
                  questions.push(item)
                }
              }
              console.log(item)
            })
            setListInfo(questions)
            setPage((p) => p + 1)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      // axios
      //   .get(getUrl, body)
      //   .then((res) => {
      //     res.data.forEach((item) => {
      //       if (item.mostLikedAnswer === null) item.mostLikedAnswer = { content: '(등록된 답변이 없습니다)' }
      //       questions.push(item)
      //       console.log(item)
      //     })
      //     setListInfo(questions)
      //     setPage((p) => p + 1)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    }

    if (listInfo.length === 0) {
      setNotExist('There is no question')
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
      <InfiniteQuestion questions={listInfo} fetchMoreData={fetchMoreData} fetching={fetching} />

      {notExist}
    </div>
  )
}
export default InfiniteQuestionList
