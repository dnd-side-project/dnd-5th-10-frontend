import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MainCarousel.css'

const MainCarousel = () => {
  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    dots: true,
  }

  const items = [
    {
      id: 1,
      src: '/img/carousel-1.png',
      textHeader: 'First Slide saklgdjklgjnal',
      caption: '서비스 소개 및 퀴즈 문구서비스 소개 및 퀴즈 문구서비스 소개 및 퀴즈 문구서비스 소개 및 퀴즈 문구',
      link: '/',
      title: '첫번째',
    },
    {
      id: 2,
      src: '/img/carousel-2.png',
      textHeader: 'Second Slide saklgdjklgjnal',
      caption: '서비스 소개 및 퀴즈 문구서비스 소개 및 퀴즈 문구서비스 소개 및 퀴즈 문구서비스 소개 및 퀴즈 문구',
      link: '/',
      title: '두번째 바로가기',
    },
    {
      id: 3,
      src: '/img/carousel-3.png',
      textHeader: 'Third Slide saklgdjklgjnal',
      caption: '서비스 소개 및 퀴즈 문구서비스 소개 및 퀴즈 문구서비스 소개 및 퀴즈 문구서비스 소개 및 퀴즈 문구',
      link: '/',
      title: '세번째 바로가기',
    },
  ]
  let slider
  const next = () => {
    slider.slickNext()
  }

  const previous = () => {
    slider.slickPrev()
  }

  const arrowLeft = '/img/arrow-left.png'
  const arrowRight = '/img/arrow-right.png'

  const slides = items.map((item) => {
    return (
      <div key={item.id} className="carousel-item">
        <div className="carousel-text">
          <h1>{item.textHeader}</h1>
          <h3>{item.caption}</h3>
        </div>
        <img height="400px" src={item.src} alt={item.textHeader}></img>
        <button className="carousel-item-link" link={item.link}>
          <span className="carousel-link-text">
            <b>{item.title}</b>
          </span>
          <span className="carousel-link-arrow">
            <b>→</b>
          </span>
        </button>
      </div>
    )
  })
  return (
    <div id="carousel-slide">
      <Slider ref={(c) => (slider = c)} {...settings}>
        {slides}
      </Slider>
      <div className="carousel-control">
        <img className="button-prev" height="30px" src={arrowLeft} onClick={previous} />
        <img className="button-next" height="30px" src={arrowRight} onClick={next} />
      </div>
    </div>
  )
}

export default MainCarousel
