import 'css/MyPage.css'
import { Button } from 'reactstrap'

const MyPage = () => {
  return (
    <div className="my-page">
      <div className="mypage-category">
        <a href="/MyPage/MyRegisterQuestion">
          <span>
            <img src="https://img.icons8.com/small/452/pink-cute-folder.png"></img>내가 등록한 문제
          </span>
        </a>
        <a href="/MyPage/MyRegisterAnswer">
          <span>
            <img src="https://img.icons8.com/small/452/pink-cute-folder.png"></img>내가 등록한 답변
          </span>
        </a>
        <a href="/MyPage/MyLike">
          <span>
            <img src="https://img.icons8.com/small/452/pink-cute-folder.png"></img>좋아요 한 답변
          </span>
        </a>
        <a href="/MyPage/MyBookmark">
          <span>
            <img src="https://img.icons8.com/small/452/pink-cute-folder.png"></img>북마크 한 문제
          </span>
        </a>
        <hr></hr>
      </div>

      <div className="my-profile">
        <img className="profile-img" src="https://image.flaticon.com/icons/png/512/711/711769.png" alt="profile-img" />

        <div className="user-name-info">
          <img
            className="profile-logo"
            src="https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png"
            alt="profile-logo"
          />
          <h1 className="user-name"> 김서현 </h1>
          <hr className="line" />
        </div>
        <div className="user-info">
          <h1>좋아요</h1>
          <h1>문제당 평균 시간</h1>
          <h1>퀴즈로 푼 문제</h1>
        </div>
      </div>

      <div className="my-question">
        <div>
          <span className="title-name">내가 한 질문</span>
          <Button className="popular-order-btn"> 인기순 </Button>
          <Button className="latest-order-btn"> 최신순 </Button>
        </div>
      </div>
    </div>
  )
}

export default MyPage
