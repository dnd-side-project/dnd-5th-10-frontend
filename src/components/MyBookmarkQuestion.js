import 'css/MyBookmarkQuestion.css'
import { Button } from 'reactstrap'

const MyBookmarkQuestion = () => {
  return (
    <div className="my-page">
      <div className="mypage-category">
        <a href="/MyPage/MyRegisterQuestion">
          <button>
            <img src="https://img.icons8.com/small/452/pink-cute-folder.png"></img>내가 등록한 문제
          </button>
        </a>
        <a href="/MyPage/MyRegisterAnswer">
          <button>
            <img src="https://img.icons8.com/small/452/pink-cute-folder.png"></img>내가 등록한 답변
          </button>
        </a>
        <a href="/MyPage/MyLikeAnswer">
          <button>
            <img src="https://img.icons8.com/small/452/pink-cute-folder.png"></img>좋아요 한 답변
          </button>
        </a>
        <a href="/MyPage/MyBookmarkQuestion">
          <button className="here-title">
            <img src="https://img.icons8.com/small/452/pink-cute-folder.png"></img>북마크 한 문제
          </button>
        </a>
        <hr className="line1" />
      </div>

      <div className="my-profile">
        <img className="profile-img" src="https://image.flaticon.com/icons/png/512/711/711769.png" alt="profile-img" />

        <div className="user-name-info">
          <img
            className="profile-logo"
            src="https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png"
            alt="profile-logo"
          />
          <h1 className="user-name"> {localStorage.getItem('userName')} </h1>
          <hr className="line2" />
        </div>
        <div className="user-info">
          <h1>좋아요</h1>
          <h1>문제당 평균 시간</h1>
          <h1>퀴즈로 푼 문제</h1>
        </div>
      </div>

      <div className="my-question">
        <div>
          <button className="title-name">
            <img src="https://img.icons8.com/small/452/pink-cute-folder.png"></img>북마크 한 문제
          </button>
          <Button className="latest-order-btn"> 최신순 </Button>
          <Button className="popular-order-btn"> 인기순 </Button>
        </div>
        <hr className="line3" />
      </div>
    </div>
  )
}

export default MyBookmarkQuestion
