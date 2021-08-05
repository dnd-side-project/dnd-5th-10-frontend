import 'css/Question.css'
import { useState } from 'react'
import { Button } from 'reactstrap'

const Question = (props) => {
  const showQuestionTags = props.tagList.map((item, index) => {
    return (
      <Button key={index} disabled>
        {item['tagTitle']}
      </Button>
    )
  })

  const checkQuestionNumber = (num) => {
    let questionNum = num.toString()
    if (questionNum.length < 2) {
      return '0' + num
    }
    return questionNum
  }

  return (
    <div className="each-question">
      <div className="question-number">{checkQuestionNumber(props.number)}</div>
      <div className="question-bookmark">
        <h1>좋아요</h1>
        <span>{props.bookmarkCount}</span>
      </div>
      <div className="question-content">
        {props.content}
        <br />
        {showQuestionTags}
      </div>
      <div className="date-or-username">{props.username}</div>
    </div>
  )
}

export default Question
