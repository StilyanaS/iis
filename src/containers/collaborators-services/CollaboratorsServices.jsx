import React from "react"
import ColaboratorsServicesEl from "./ColaboratorsServicesEl"
import Services from "./service-data"
import "./collaborators-services.css"
const CollaboratorsServices = () => {
  return (
    <div>
      <div className="robots__collaborators-services">
        {Services.map((item) => {
          return (
            <ColaboratorsServicesEl
              img={item.imgUrl}
              title={item.titleH3}
              p1={item.p1}
              p2={item.p2}
              p3={item.p3}
              hrefUrl={item.hrefUrl}
              key={item.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CollaboratorsServices
