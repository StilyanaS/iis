import React from 'react';
import './about-section.css';
import officeImage from '../../assets/iis-office.jpg';
import { BsArrowRightShort } from '../../../node_modules/react-icons/bs'
const AboutSection = () => {
  return (
    <div className='robots__about-section'>
        <div className="robots__about-section_image">
            <img src={officeImage} alt="IIS office" />
        </div>
        <div className="robots__about-section_cta">
            <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
            <div className="robots__about-cta_content">
                <p>Why you might be interested in working with IIS? <BsArrowRightShort /> </p>
                <p>
                Check our history <BsArrowRightShort />
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection