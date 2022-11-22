import { useMediaQuery } from "react-responsive"
import "./header-section.css"
const InteriorHeader = ({ title, description, img1, img2, img3 }) => {
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
        <div
          className={
            img1 || img2 || img3
              ? "robots__collaborators-header_cta"
              : "robots__collaborators-header_cta full-width"
          }
        >
          <h1>{title}</h1>
          <p>{description}</p>
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
        {(img1 || img2 || img3) && (
          <div className="robots__collaborators-header_images">
            <div>
              <img src={img1} alt="" className="robots__header-first_image" />
            </div>
            <div className="robots__header-two_images border-images">
              <img src={img2} alt="" className="robots__header-second_image" />
              <img src={img3} alt="" className="robots__header-third_image" />
            </div>
          </div>
        )}
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
            <circle
              cx="646.5"
              cy="-142.5"
              r="646.5"
              fill="rgba(0, 196, 204,0.3)"
            />
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
            <circle
              cx="646.5"
              cy="-142.5"
              r="646.5"
              fill="rgba(0, 196, 204,0.5)"
            />
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
            <circle
              cx="646.5"
              cy="-142.5"
              r="646.5"
              fill="rgba(0, 196, 204,0.5)"
            />
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
    </div>
  )
}

export default InteriorHeader
