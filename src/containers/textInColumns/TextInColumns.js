import React from "react"
import "./text-in-columns.css"
import PageFilter from "../../components/pageFilter/PageFilter"

const ServiceHeaderContainer = () => {
  return (
    <div className="robots__service-header">
      <div className="robots__service-header-container">
        <h1 className="gradient__text">Robots & Cobots</h1>
        <p className="robots__service-header-container-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
        <div className="robots__service-header_btn">
          <p>Request more info</p>
        </div>
      </div>
      <PageFilter />
    </div>
  )
}

export default ServiceHeaderContainer
