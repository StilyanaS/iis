import React from 'react';
import './header.css'
import robot from '../../assets/robot-ind.png';
const Header = () => {
  return (
    <div className='robots__header section__padding' id='home'>
      <div className='robots__header-content'>
        <h1 className='gradient__text'>
          Automation is the key to Industry 4.0
        </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis eveniet voluptatum hic, sunt earum, sequi iste mollitia doloribus facere iusto vel aperiam voluptates molestias nostrum. Repellat recusandae vel praesentium tenetur?</p>
        <div className='robots__header-content__input'>
          <input type='email' placeholder='Type your email adress' />
          <button type='button'>Get started</button>
        </div>
      </div>
      <div className='robots__header-image'>
        <img src={robot} alt='robot'/>
      </div>
    </div>
  )
}

export default Header