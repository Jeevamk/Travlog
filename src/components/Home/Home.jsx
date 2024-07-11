import React from 'react'
import Features from './Features'
import TravelPoint from './TravelPoint'
import DestinationSlider from './DestinationSlider'
import TravelPlatform from './TravelPlatform'
import Hero from './Hero'

const Home = () => {
  return (
    <>
    <Hero/>
    <TravelPlatform/>
    <DestinationSlider/>
       <TravelPoint/>
        <Features/>

    </>
 
  )
}

export default Home