import { useState, useEffect } from 'react'
import Question from 'components/Question'

const InfiniteQuestion = ({ questions, fetching, fetchMoreData }) => {
  const [questionInfo, setQuestionInfo] = useState(questions)
  useEffect(() => {
    setQuestionInfo(questions)
  }, [questions])

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
      {questionInfo &&
        questionInfo.map((ques, index) => {
          return (
            <Question
              key={index}
              id={ques.id}
              number={index + 1}
              content={ques.content}
              answer={ques.mostLikedAnswer.content}
              tagList={ques.tagList}
            />
          )
        })}
    </div>
  )
}
export default InfiniteQuestion
