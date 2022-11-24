import React from "react"

import "./about.css"
import { data } from "./about.js"
import img from "../../assets/robot-colaborators-1.jpg"
import img2 from "../../assets/robot-colaborators-2.jpg"
import img3 from "../../assets/robot-header-image2.jpg"
import InteriorHeader from "../../components/interiors/header/HeaderSection"
import ReviewsCarousel from "../../components/reviews/ReviewsCarousel"
import Footer from "../../containers/footer/Footer"
import { Services } from "../../containers/"
import { CTA } from "../../components"
const AboutPage = () => {
  return (
    <>
      <InteriorHeader
        title={data.title}
        description={data.description}
        img1={img}
        img2={img2}
        img3={img3}
      />
      <Services />
      <ReviewsCarousel />
      <CTA />
      <Footer />
    </>
  )
}

export default AboutPage
