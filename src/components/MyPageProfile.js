import 'css/MyPageProfile.css'

const MyPageProfile = () => {
  return (
    <div className="mypage-profile">
      <img
        className="mypage-profile-img"
        src="https://image.flaticon.com/icons/png/512/711/711769.png"
        alt="profile-img"
      />
      <div className="mypage-user-name-info">
        <img src="/img/mypage_profile.png" alt="profile-logo" />
        <h1> {localStorage.getItem('userName')} </h1>
        <div className="mypage-line2" />
      </div>
      <div className="mypage-user-info">
        <div className="mypage-user-info-left">
          <div>문제당 평균 시간</div>
          <div>좋아요</div>
          <div>퀴즈로 푼 문제</div>
        </div>
        <div className="mypage-user-info-right">
          <div>02:50</div>
          <div>100</div>
          <div>170</div>
        </div>
      </div>
    </div>
  )
}
export default MyPageProfile
