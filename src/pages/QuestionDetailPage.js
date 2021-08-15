import QuestionDetail from 'components/QuestionDetail'

const QuestionDetailPage = () => {
  const iterviewLogo = '/img/iterview-logo.jpg'
  return (
    <>
      {/* Todo: 그냥 바로 할 건지 네비게이션 바가 보이게 할 건지 의논 */}
      {/* <div className="question-detail-bar">
        <img src={iterviewLogo} />
      </div> */}
      <div className="question-detail-bar">
        <div className="question-detail-title">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLT_4oCVf9gITrJ_QxYgV7m7IHAsL8DheddBAUKXyw=s900-c-k-c0x00ffffff-no-rj"
            alt="question-detail-title-icon"
          />
          <span>문제 제목</span>
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
