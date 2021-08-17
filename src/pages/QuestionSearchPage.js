import QuestionSearch from 'components/QuestionSearch'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
const QuestionSearchPage = () => {
  const questionRegisterImg = '/img/questionRegister.jpg'
  return (
    <>
      <Navigation />
      <div className="question-search-img">
        <img src={questionRegisterImg} alt="question-register-img" />
        <h1>면접문제 검색</h1>
        <h3>
          이리저리 흩어진 면접질문과 답변?
          <br />
          한번에 검색하고, 검증된 답변도 확인해보세요!
        </h3>
      </div>
      <div className="body">
        <QuestionSearch />
      </div>
      <Footer />
    </>
  )
}
export default QuestionSearchPage
