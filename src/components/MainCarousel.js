import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'css/MainCarousel.css'
import { Link } from 'react-router-dom'

const MainCarousel = () => {
  return (
    <div id="carousel-slide">
      <div id="background">
        <img className="space1" src="/img/main_img.png" alt="" />

        <Link to="/SetQuizOptions">
          <button className="main-quiz-btn">퀴즈풀기</button>
        </Link>
      </div>
    </div>
  )
}

export default MainCarousel
