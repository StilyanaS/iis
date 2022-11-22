import React from "react"
import AboutSection from "../../components/about-section/AboutSection"
import InteriorHeader from "../../components/interiors/header/HeaderSection"
import { Footer } from "../../containers"
import CollaboratorsServices from "../../containers/collaborators-services/CollaboratorsServices"
import ReviewsCarousel from "../../components/reviews/ReviewsCarousel"

const Services = () => {
  let titleTest = " How we can help you"
  let descriptionTest = "Our commitment to clients and quality"
  return (
    <>
      <InteriorHeader title={titleTest} description={descriptionTest} />
      <CollaboratorsServices />
      <ReviewsCarousel />
      <AboutSection />
      <Footer />
    </>
  )
}

export default Services
