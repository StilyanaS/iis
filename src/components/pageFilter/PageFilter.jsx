import React from "react"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
//import {robot2, robot3} from './import.js';
//import robot1 from '../../assets/icons/1.png';
import "./PageFilter.css"

const PageFilter = () => {
  const list = [{ title: "home1", key: 1 }, "home2", "home3", "home4", "home5"]
  return (
    <div className="robots__filter-navigation">
      <div className="robots__filter-navigation-container">
        <div className="robots__service-navigation">
          <ul>
            {list.map((item) => {
              return (
                <li className="list" key={item.key}>
                  <a href="#">
                    <span className="icon">
                      <BsFillArrowRightCircleFill width={48} height="42" />
                    </span>
                    <span className="title">{item.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PageFilter
