import React from "react"
import CollaboratorsHeader from "./collaborators-header/Collaborators-header.jsx"
//import CollaboratorsType from "./collaborators-type/CollaboratorsType.jsx"
import CardElements from "./card-data"
import { textContent } from "./card-data"
import CollaboratorsServices from "../../containers/collaborators-services/CollaboratorsServices"
import ReviewsCarousel from "../../components/reviews/ReviewsCarousel.jsx"
import AboutSection from "../../components/about-section/AboutSection.jsx"
import Footer from "../../containers/footer/Footer"
import TypeCardList from "../../components/interiors/types/TypeCardList.jsx"
const Collaborators = () => {
  return (
    <div className="robots__collaborators-container">
      <CollaboratorsHeader />
      <TypeCardList CardElements={CardElements} textContent={textContent} />
      <CollaboratorsServices />
      <ReviewsCarousel />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default Collaborators
