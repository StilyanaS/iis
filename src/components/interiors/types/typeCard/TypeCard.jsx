import { BsFillCaretRightFill } from "react-icons/bs"
import "./type-card.css"
const TypeCard = ({ image, title, hrefUrl }) => {
  return (
    <div className="robots__collaborators-type_card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>
        <a href={hrefUrl}>Explore companies</a>
        <BsFillCaretRightFill size={20} />
      </p>
    </div>
  )
}

export default TypeCard
