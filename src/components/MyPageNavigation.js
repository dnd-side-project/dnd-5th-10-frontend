import 'css/MyPageNavigation.css'
import { useEffect } from 'react'
import { withRouter } from 'react-router'

const MyPageNavigation = (props) => {
  const changeBorderColor = (selected) => {
    document.getElementById('text-question').style.borderBottom = '0'
    document.getElementById('text-question').style.color = '#6a737d'

    document.getElementById('text-answer').style.borderBottom = '0'
    document.getElementById('text-answer').style.color = '#6a737d'

    document.getElementById('text-like').style.borderBottom = '0'
    document.getElementById('text-like').style.color = '#6a737d'

    document.getElementById('text-bookmark').style.borderBottom = '0'
    document.getElementById('text-bookmark').style.color = '#6a737d'

    selected.style.borderBottom = '2px solid #2188FF'
    selected.style.color = 'black'
  }

  useEffect(() => {
    const pathname = window.location.pathname
    if (pathname.indexOf('MyRegisterQuestion') !== -1) {
      document.getElementById('text-question').style.borderBottom = '2px solid #2188FF'
      document.getElementById('text-question').style.color = 'black'
    } else if (pathname.indexOf('MyRegisterAnswer') !== -1) {
      document.getElementById('text-answer').style.borderBottom = '2px solid #2188FF'
      document.getElementById('text-answer').style.color = 'black'
    } else if (pathname.indexOf('MyLikeAnswer') !== -1) {
      document.getElementById('text-like').style.borderBottom = '2px solid #2188FF'
      document.getElementById('text-like').style.color = 'black'
    } else if (pathname.indexOf('MyBookmarkQuestion') !== -1) {
      document.getElementById('text-bookmark').style.borderBottom = '2px solid #2188FF'
      document.getElementById('text-bookmark').style.color = 'black'
    }
  })
  // const firstBorderColor = () => {}

  return (
    <div className="mypage-navigtaion">
      <div className="mypage-category">
        <button
          onClick={() => {
            props.history.push('/MyPage/MyRegisterQuestion')
            changeBorderColor(document.getElementById('text-question'))
          }}>
          <img src="https://img.icons8.com/small/452/pink-cute-folder.png" />
          <span id="text-question">내가 등록한 문제</span>
        </button>
        <button
          onClick={() => {
            props.history.push('/MyPage/MyRegisterAnswer')
            changeBorderColor(document.getElementById('text-answer'))
          }}
          className="here-title">
          <img src="https://img.icons8.com/small/452/pink-cute-folder.png" />
          <span id="text-answer">내가 등록한 답변</span>
        </button>
        <button
          onClick={() => {
            props.history.push('/MyPage/MyLikeAnswer')
            changeBorderColor(document.getElementById('text-like'))
          }}>
          <img src="https://img.icons8.com/small/452/pink-cute-folder.png" />
          <span id="text-like">좋아요 한 답변</span>
        </button>
        <button
          onClick={() => {
            props.history.push('/MyPage/MyBookmarkQuestion')
            changeBorderColor(document.getElementById('text-bookmark'))
          }}>
          <img src="https://img.icons8.com/small/452/pink-cute-folder.png" />
          <span id="text-bookmark">북마크 한 문제</span>
        </button>
        <div className="line1" />
      </div>
    </div>
  )
}

export default withRouter(MyPageNavigation)
