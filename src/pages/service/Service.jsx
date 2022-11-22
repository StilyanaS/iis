import React from "react"
import InteriorHeader from "../../components/interiors/header/HeaderSection"
import ReviewsCarousel from "../../components/reviews/ReviewsCarousel"
import AboutSection from "../../components/about-section/AboutSection"
import { Footer } from "../../containers"
import CollaboratorsType from "../collaborators/collaborators-type/CollaboratorsType"
import { img, img2, img3 } from "./import"
const Service = () => {
  let title = "Software"
  let description =
    "Personalized software completely adapted to your process system"
  return (
    <>
      <InteriorHeader
        title={title}
        description={description}
        img1={img}
        img2={img2}
        img3={img3}
      />
      <CollaboratorsType />
      <ReviewsCarousel />
      <AboutSection />
      <Footer />
    </>
  )
}

export default Service
