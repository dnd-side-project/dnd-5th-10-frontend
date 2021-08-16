import axios from 'axios'
import InfiniteAnswer from 'components/InfiniteAnswer'
import { useEffect, useState } from 'react'

const InfiniteAnswerList = (props) => {
  const [listInfo, setListInfo] = useState([])
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(10)
  const [fetching, setFetching] = useState(false)

  const [questionId, setQuestionId] = useState(props.question)
  const [questionTitle, setQuestionTitle] = useState(props.title)
  const [page, setPage] = useState(0)
  const [sort, setSort] = useState('liked')

  useEffect(() => {
    if (props.sort !== sort) {
      console.log('changed')
      setSort(props.sortBy)
      setPage(0)
      setListInfo([])
    }
    setQuestionTitle(props.title)
    setQuestionId(props.question)
    const body = {
      skip: skip,
      limit: limit,
    }
    getData(body)
  }, [props])

  const getData = (body) => {
    let answer = listInfo
    axios
      .get(`/api/v1/answer/question/${questionId}?page=${page}&size=3&sort=${sort},desc`, body)
      .then((res) => {
        if (res.data.content.length !== 0) {
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
          console.log(page)
        }
        console.log(listInfo)
      })
      .catch((err) => console.log(err))
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
      <InfiniteAnswer
        questionTitle={questionTitle}
        answers={listInfo}
        fetchMoreData={fetchMoreData}
        fetching={fetching}
      />
    </div>
  )
}
export default InfiniteAnswerList
