import { useState, useEffect } from 'react'
import Answer from 'components/Answer'

const InfiniteAnswer = ({ answers, fetching, fetchMoreData, questionTitle }) => {
  const [answerInfo, setAnswerInfo] = useState(answers)
  useEffect(() => {
    setAnswerInfo(answers)
  }, [answers])

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      fetchMoreData()
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <div>
      {console.log(answerInfo)}
      {answerInfo &&
        answerInfo.map((ans, index) => (
          <Answer
            key={ans.id}
            id={ans.id}
            number={index + 1}
            answer={ans.content}
            title={questionTitle}
            username={ans.username}
            like={ans.liked}
          />
        ))}
    </div>
  )
}
export default InfiniteAnswer
