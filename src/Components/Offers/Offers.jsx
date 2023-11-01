/* eslint-disable no-unused-vars */
import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'


const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For you</h1>
            <p>Only On best Sellers Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers