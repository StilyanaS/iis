import React from 'react';
import { Feature } from '../../components';
import './services.css';
const servicesData = [
  {
    title: 'Lorem',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus facilis eum rerum aliquam voluptas, id amet labore dicta alias ratione.'
  },
  {
    title: 'Lorem',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus facilis eum rerum aliquam voluptas, id amet labore dicta alias ratione.'
  },{
    title: 'Lorem',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus facilis eum rerum aliquam voluptas, id amet labore dicta alias ratione.'
  },{
    title: 'Lorem',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus facilis eum rerum aliquam voluptas, id amet labore dicta alias ratione.'
  }
]
const Services = () => {
  return (
    <div className='robots__services section__padding' id='services'>
      <div className='robots__services-heading'>
        <h1 className='gradient__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus facilis eum rerum aliquam voluptas, id amet labore dicta alias ratione.</p>
      </div>
      <div className='robots__services-container'>
      {servicesData.map((item,index)=>
      <Feature title={item.title} text={item.text} key={item.title + index}/>
     )}
      </div>
    </div>
  )
}

export default Services