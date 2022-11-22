import React from "react"
import { useMediaQuery } from "react-responsive"
import "./collaborators-header.css"
//import Ellipse from "../../../assets/Ellipse.svg"
import robot from "../../../assets/robot-colaborators-1.jpg"
import robot1 from "../../../assets/robot-colaborators-2.jpg"
import robot2 from "../../../assets/robot-header-image2.jpg"
import Brand from "../../../components/brand/Brand"
const CollaboratorsHeader = () => {
  const verySmallScreen = useMediaQuery({
    query: "(max-width: 490px)",
  })
  const smallScreen = useMediaQuery({
    query: "(min-width: 500px) and (max-width: 700px)",
  })
  const mediumScreen = useMediaQuery({
    query: "(min-width:710px) and (max-width:1050px)",
  })

  const bigScreen = useMediaQuery({
    query: "(min-width:1060px)",
  })

  return (
    <div>
      <div className="robots__collaborators-header">
        <div className="robots__collaborators-header_cta">
          <h1>Collaborators</h1>

          {smallScreen && <p>small device</p>}
          {mediumScreen && <p>Medium device</p>}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            saepe reprehenderit corrupti iste magnam beatae perspiciatis facilis
            obcaecati. Cupiditate qui iste sed in eaque reprehenderit maxime
            dolore officiis tempore repellendus!
          </p>
          <div className="robots__collaborators-header-buttons">
            <input
              type="button"
              className="robots__collabortators-header_button1"
              value="Contact us"
            />
            <input
              type="button"
              className="robots__collabortators-header_button2"
              value="Our company"
            />
          </div>
        </div>
        <div className="robots__collaborators-header_images">
          <div>
            <img src={robot} alt="" className="robots__header-first_image" />
          </div>
          <div className="robots__header-two_images border-images">
            <img src={robot1} alt="" className="robots__header-second_image" />
            <img src={robot2} alt="" className="robots__header-third_image" />
          </div>
        </div>
      </div>
      {bigScreen && (
        <div className="background">
          <svg
            width="623"
            height="504"
            viewBox="0 0 623 504"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="646.5" cy="-142.5" r="646.5" fill="rgba(0,38,79,0.2" />
          </svg>
        </div>
      )}
      {mediumScreen && (
        <div className="background">
          <svg
            width="623"
            height="504"
            viewBox="0 0 623 504"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="646.5" cy="-142.5" r="646.5" fill="rgba(0,38,79,0.2" />
          </svg>
        </div>
      )}
      {smallScreen && (
        <div className="background">
          <svg
            width="623"
            height="504"
            viewBox="0 0 623 504"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="646.5" cy="-142.5" r="646.5" fill="rgba(0,38,79,0.2" />
          </svg>
        </div>
      )}
      {verySmallScreen && (
        <div className="background">
          <svg
            width="623"
            height="504"
            viewBox="0 0 623 504"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="646.5" cy="-142.5" r="646.5" fill="rgba(0,38,79,0.2" />
          </svg>
        </div>
      )}
      <Brand />
    </div>
  )
}

export default CollaboratorsHeader
