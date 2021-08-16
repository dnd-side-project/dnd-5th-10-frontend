import QuestionDetail from 'components/QuestionDetail'

const QuestionDetailPage = () => {
  const iterviewLogo = '/img/iterview-logo.jpg'
  return (
    <>
      {/* <div className="question-detail-bar"></div> */}
      <div className="question-detail-top">
        <div className="question-detail-bar">
          <img src={iterviewLogo} />
        </div>
        <div id="top-hr-line" />
        <div className="question-detail-title">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLT_4oCVf9gITrJ_QxYgV7m7IHAsL8DheddBAUKXyw=s900-c-k-c0x00ffffff-no-rj"
            alt="question-detail-title-icon"
          />
          <span>{localStorage.getItem('detailTitle')}</span>
          <button>북마크로 문제 저장하기</button>
        </div>
      </div>
      <div className="body">
        <QuestionDetail />
      </div>
    </>
  )
}
export default QuestionDetailPage
