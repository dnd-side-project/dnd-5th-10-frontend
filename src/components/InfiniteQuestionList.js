import axios from 'axios'
import InfiniteQuestion from 'components/InfiniteQuestion'
import { useEffect, useState } from 'react'

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
    setTagList(props.tagList)
    setPage(0)
    setListInfo([])
  }, [props.tagList])

  useEffect(() => {
    setWord(props.word)
    setPage(0)
    setListInfo([])
  }, [props.word])

  useEffect(() => {
    // console.log('reload')
    const body = {
      skip: skip,
      limit: limit,
    }
    getData(body)
  })

  const getData = (body) => {
    const questions = listInfo
    // const questions = listInfo
    // console.log(tagList.length)
    // console.log(word.length)
    let getUrl = `/api/v1/question/search?keyword=${word}&page=${page}&size=10&sort=${sort},desc`
    // if (tagList.length > 0) getUrl += `&tags=${tagList}`
    // else if (word.length <= 0) {
    //   getUrl = `/api/v1/question/all`
    // }

    if (props.type === 'question') {
      getUrl = `/api/v1/question/mine?page=${page}&size=10&sort=${sort},desc`
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
              // console.log(item)
            })
            setListInfo(questions)
            setPage((p) => p + 1)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else if (props.type === 'bookmark') {
      getUrl = `/api/v1/bookmark/mine?page=${page}&size=10&sort=${sort},desc`
      axios
        .get(getUrl, body)
        .then((res) => {
          // console.log(res.data)
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
      getUrl = `/api/v1/question/search?keyword=${word}&page=${page}&size=10&sort=${sort},desc`
      if (tagList.length > 0) getUrl += `&tags=${tagList}`
      else if (word.length <= 0) {
        getUrl = `/api/v1/question/all?page=${page}&size=10&sort=${sort},desc`
      }
      console.log(getUrl)
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
            })
            setListInfo(questions)
            console.log(listInfo)
            setPage((p) => p + 1)
          }
        })
        .catch((err) => {
          console.log(err)
        })
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
