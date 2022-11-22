import React from 'react';
import './brand.css';
import {mitsubishi,siemens,xiamen,schneider,dobot} from './import.js';
const Brand = () => {
  return (
    <div className='robots__brand section__padding'>
      <div>
      <img src={ dobot } alt='dobot'/>
      </div>
      <div>
      <img src={ mitsubishi } alt='mitsubishi'/>
      </div>
      <div>
      <img src={ siemens } alt='siemens'/>
      </div>
      <div>
      <img src={ xiamen } alt='xiamen elex'/>
      </div>
      <div>
      <img src={ schneider } alt='schneider'/>
      </div>
    </div>
  )
}

export default Brand