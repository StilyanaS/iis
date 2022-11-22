import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div className='robots__footer section__padding'>
      <div className='robots__footer-heading'>
        <h1 className='gradient__text'>Automation solutions help you optimize your industry process</h1>
      </div>
      <div className='robots__footer-btn'>
        <p>Request personalization</p>
      </div>
      <div className='robots__footer-links'>
        <div className='robots__footer-links_logo'>
          <img src={logo} alt="logo" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='robots__footer-links_div'>
          <h4>Links</h4>
          <p>About</p>
          <p>Contact</p>
          <p>Social media</p>
          <p>Blog</p>
        </div>
        <div className='robots__footer-links_div'>
          <h4>Privacy</h4>
          <p>Privacy police</p>
          <p>Cookies</p>
          <p>Terms and conditions</p>
        </div>
        <div className='robots__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Address: Radko Dimitriev str. 7</p>
          <p>643 987 876</p>
          <p>office@kasi-bg,eu</p>
        </div>
      </div>
      <div className='robots__footer-copyright'>
        <p>© 2022 Integrated Industrial Systems. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer