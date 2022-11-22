import React from 'react';
import './feature.css';

const Feature = ({title,text}) => {
  return (
    <div className='robots__services-container__feature'>
        <div className="robots__services-container__feature-title">
      <div />
      <h1>{title}</h1>
      </div>
      <div className='robots__services-container_feature-text'>
      <p>{text}</p>
      </div>
      </div>
  )
}

export default Feature