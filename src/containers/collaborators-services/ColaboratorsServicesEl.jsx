import React from "react"
import { BsFillCheckCircleFill } from "react-icons/bs"
const ColaboratorsServicesEl = ({ img, title, p1, p2, p3, hrefUrl }) => {
  return (
    <div className="robots__collaborators-services_section">
      <img src={img} alt="" />
      <div className="robots__collaborators-services-right">
        <h3>{title}</h3>
        <div>
          <p>
            <BsFillCheckCircleFill size={30} />
            <span>{p1}</span>
          </p>
        </div>
        <div>
          {" "}
          <p>
            <BsFillCheckCircleFill size={30} />
            <span>{p2}</span>
          </p>
        </div>
        <p>
          <BsFillCheckCircleFill size={30} />
          <span>{p3}</span>
        </p>
        <p className="collaborators-button">
          <a href={hrefUrl}>Our projects</a>
        </p>
      </div>
    </div>
  )
}

export default ColaboratorsServicesEl
