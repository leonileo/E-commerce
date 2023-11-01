/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLeter from '../Components/NewsLetter/NewsLeter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLeter/>
    </div>
  )
}

export default Shop