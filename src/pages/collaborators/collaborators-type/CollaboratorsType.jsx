import React from "react"
import "./collaborators-type.css"
import CollaboratorsTypeCard from "./CollaboratorsTypeCard/CollaboratorsTypeCard"

const CollaboratorsType = () => {
  let CardElements = []
  let textContent = {}
  return (
    <div className="robots__collaborators-type">
      <div className="robots__collaborators-type_container">
        <div className="robots__collaborators-type_container-header">
          <p>{textContent.p}</p>
          <h2>{textContent.h2}</h2>
        </div>
      </div>
      <div className="robots__collaborators-type_cards-container">
        <div className="robots__collaborators-type_cards">
          {CardElements.map((item) => {
            console.log(item.h3title)
            return (
              <CollaboratorsTypeCard
                image={item.imgUrl}
                title={item.h3title}
                hrefUrl={item.hrefCollab}
                key={item.key}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CollaboratorsType
