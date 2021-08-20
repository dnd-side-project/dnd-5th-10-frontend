import QuestionDetail from 'components/QuestionDetail'
import axios from 'axios'

const QuestionDetailPage = () => {
  const iterviewLogo = '/img/iterview-logo.jpg'
  // const quesId = localStorage.getItem('detailId')

  const bookmarkIt = () => {
    const quesId = localStorage.getItem('detailId')
    axios({
      method: 'post',
      url: `/api/v1/bookmark/${quesId}`,
      params: {
        questionId: quesId,
      },
    })
      .then((res) => {
        console.log(res)
        window.alert('북마크 되었습니다.')
      })
      .catch((err) => {
        console.log(err)
        window.alert('이미 북마크한 문제입니다.')
      })
  }
  return (
    <>
      <div className="question-detail-top">
        <div className="question-detail-bar">
          <img src={iterviewLogo} />
        </div>
        <div id="top-hr-line" />
        <div className="question-detail-title">
          <img src="/img/figure1.png" alt="question-detail-title-icon" />
          <span>{localStorage.getItem('detailTitle')}</span>
          <button onClick={bookmarkIt}>북마크로 문제 저장하기</button>
        </div>
      </div>
      <div className="body">
        <QuestionDetail />
      </div>
    </>
  )
}
export default QuestionDetailPage
