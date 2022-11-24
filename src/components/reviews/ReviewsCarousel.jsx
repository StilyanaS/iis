import React from "react"
import { useState } from "react"
import Slider from "react-slick"
import review1 from "../../assets/reviews/review1.png"
import review2 from "../../assets/reviews/review2.png"
import review3 from "../../assets/reviews/review3.png"
import "./reviews-carousel.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
const images = [review1, review2, review3, review1]

const ReviewsCarousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowAltCircleRight />
      </div>
    )
  }
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowAltCircleLeft />
      </div>
    )
  }
  const [imageIndex, setImageIndex] = useState(0)
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <div className="robots__reviews-container">
      <div className="robots__reviews-container-slider">
        <h3>Our goal is to meet and satisfy your business needs</h3>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
              key={idx}
            >
              <img src={img} alt="customer review" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ReviewsCarousel
