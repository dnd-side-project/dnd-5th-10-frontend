import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'css/MainCarousel.css'
import { Link } from 'react-router-dom'

const MainCarousel = () => {
  return (
    <div id="carousel-slide">
      <div id="background">
        <img className="space1" src="/img/main_img2.png" alt="" />
        <div className="iterview-info">
          <h1>IT'erview를 소개합니다.</h1>
          <span>
            IT'erview는 개발자들의 면접을 효율적으로 도와주는 서비스입니다.
            <br />
            체계적인 면접학습을 경험해보세요.
          </span>
        </div>
        <Link to="/SetQuizOptions">
          <button className="main-quiz-btn">퀴즈풀기</button>
        </Link>
      </div>
    </div>
  )
}

export default MainCarousel
