import React, { useState } from "react"
import "./navbar.css"
import logo from "../../assets/logo.svg"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="robots__navbar">
      <div className="robots__navbar-links">
        <div className="robots__navbar-links_logo">
          <img src={logo} alt="robots logo" />
        </div>
        <div className="robots__navbar-links_container">
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/services">Services</a>
          </p>
          <p>
            <a href="/collaborators">Collaborators</a>
          </p>
          <p>
            <a href="/about">About</a>
          </p>
          <p>
            <a href="/contact">Contact</a>
          </p>
        </div>
      </div>
      <div className="robots__navbar-sign">
        <p>Call us</p>
        <button type="button">Email</button>
      </div>
      <div className="robots__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="robots__navbar-menu_container scale-up-center">
            <div className="robots__navbar-menu_container-links">
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/services">Services</a>
              </p>
              <p>
                <a href="/collaborators">Collaborators</a>
              </p>
              <p>
                <a href="/contact">Contact</a>
              </p>
              <p>
                <a href="/about">About</a>
              </p>
              <div className="robots__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
