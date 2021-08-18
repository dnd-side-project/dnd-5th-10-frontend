import 'css/MyPageNavigation.css'
import { useEffect } from 'react'
import { withRouter } from 'react-router'

const MyPageNavigation = (props) => {
  const changeBorderColor = (selected) => {
    document.getElementById('text-question').style.borderBottom = '0'
    document.getElementById('text-question').style.color = '#6a737d'
    document.getElementById('text-question').style.fontWeight = 'normal'

    document.getElementById('text-answer').style.borderBottom = '0'
    document.getElementById('text-answer').style.color = '#6a737d'
    document.getElementById('text-answer').style.fontWeight = 'normal'

    document.getElementById('text-like').style.borderBottom = '0'
    document.getElementById('text-like').style.color = '#6a737d'
    document.getElementById('text-like').style.fontWeight = 'normal'

    document.getElementById('text-bookmark').style.borderBottom = '0'
    document.getElementById('text-bookmark').style.color = '#6a737d'
    document.getElementById('text-bookmark').style.fontWeight = 'normal'

    selected.style.borderBottom = '2px solid #2188FF'
    selected.style.color = 'black'
    selected.style.fontWeight = 'bold'
  }

  useEffect(() => {
    const pathname = window.location.pathname
    if (pathname.indexOf('MyRegisterQuestion') !== -1) {
      document.getElementById('text-question').style.borderBottom = '2px solid #2188FF'
      document.getElementById('text-question').style.color = 'black'
      document.getElementById('text-question').style.fontWeight = 'bold'
      changeBorderColor(document.getElementById('text-question'))
    } else if (pathname.indexOf('MyRegisterAnswer') !== -1) {
      document.getElementById('text-answer').style.borderBottom = '2px solid #2188FF'
      document.getElementById('text-answer').style.color = 'black'
      document.getElementById('text-answer').style.fontWeight = 'bold'
      changeBorderColor(document.getElementById('text-answer'))
    } else if (pathname.indexOf('MyLikeAnswer') !== -1) {
      document.getElementById('text-like').style.borderBottom = '2px solid #2188FF'
      document.getElementById('text-like').style.color = 'black'
      document.getElementById('text-like').style.fontWeight = 'bold'
      changeBorderColor(document.getElementById('text-like'))
    } else if (pathname.indexOf('MyBookmarkQuestion') !== -1) {
      document.getElementById('text-bookmark').style.borderBottom = '2px solid #2188FF'
      document.getElementById('text-bookmark').style.color = 'black'
      document.getElementById('text-bookmark').style.fontWeight = 'bold'
      changeBorderColor(document.getElementById('text-bookmark'))
    }
  })
  // const firstBorderColor = () => {}

  return (
    <div className="mypage-navigation">
      <div className="mypage-category">
        <button
          onClick={() => {
            props.history.push('/MyPage/MyRegisterQuestion')
            changeBorderColor(document.getElementById('text-question'))
          }}>
          <img src="/img/mypage_icon1.png" alt="my-register-question" />
          <span id="text-question">내가 등록한 문제</span>
        </button>
        <button
          onClick={() => {
            props.history.push('/MyPage/MyRegisterAnswer')
            changeBorderColor(document.getElementById('text-answer'))
          }}
          className="here-title">
          <img src="/img/mypage_icon2.png" alt="my-register-answer" />
          <span id="text-answer">내가 등록한 답변</span>
        </button>
        <button
          onClick={() => {
            props.history.push('/MyPage/MyLikeAnswer')
            changeBorderColor(document.getElementById('text-like'))
          }}>
          <img src="/img/mypage_icon3.png" alt="my-like-answer" />
          <span id="text-like">좋아요한 답변</span>
        </button>
        <button
          onClick={() => {
            props.history.push('/MyPage/MyBookmarkQuestion')
            changeBorderColor(document.getElementById('text-bookmark'))
          }}>
          <img src="/img/mypage_icon4.png" alt="my-bookmark-question" />
          <span id="text-bookmark">북마크한 문제</span>
        </button>
        {/* <div className="line1" /> */}
      </div>
    </div>
  )
}

export default withRouter(MyPageNavigation)
