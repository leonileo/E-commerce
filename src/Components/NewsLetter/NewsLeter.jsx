/* eslint-disable no-unused-vars */
import React from 'react'
import './NewsLetter.css'


const NewsLeter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email.</h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <div>
            <input type="email" placeholder='Enter your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLeter