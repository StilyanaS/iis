import React from 'react';
import './about.css';
import Feature from '../../components/feature/Feature';
const About = () => {
  return (
    <div className='robots__about section__margin' id='about'>
      <div className='robots__about-feature'>
      <Feature title = 'What do we do' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
      </div>
    <div className='robots__about-header'>
      <h1 className='gradient__text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis quod tenetur. Dicta ullam quo consectetur facere. Vel commodi illum ut ab, vero iure, facilis quas aspernatur, inventore possimus aliquam!</p>
    </div>
    <div className='robots__about-container'>
    <Feature title = 'What do we do' text='Texto'/>
    <Feature title = 'What do we do' text='Texto'/>
    <Feature title = 'What do we do' text='Texto'/>
    </div>
    </div>
  )
}

export default About