import React from 'react';
import './contact.css'
import contactImage from '../../assets/services-robot.png'
const Contact = () => {
  return (
    <div className='robots__contact section__padding' id='contact'>
      <div className="robots__contact-image">
        <img src={contactImage} alt="contact" />
      </div>
      <div className="robots__contact-content">
        <h4>Request early to get started</h4>
        <h1 className='gradient__text'>Tha advantages are infinite</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla itaque, tempora consectetur officiis reprehenderit. Animi, aut deserunt minima quasi sed nostrum quibusdam dolorem sequi provident expedita laborum error architecto?</p>
        <h4>equest early to get started</h4>
      </div>
    </div>
  )
}

export default Contact