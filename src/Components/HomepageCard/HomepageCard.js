import React from "react";
import './homepagecard.scss'

const HomePageCard =(props)=>{
  return (
    <div className='card-container'>
      <div className='category-container' style={{
        backgroundImage:`url(${props.image})`
      }}>
        <div className='text-container'>
          <h3>{props.category}</h3>
          <h5>SHOP NOW</h5>
        </div>
      </div>
    </div>
  )
}

export default HomePageCard;
