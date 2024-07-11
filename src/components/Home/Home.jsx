import React from 'react'
import Features from './Features'
import TravelPoint from './TravelPoint'
import DestinationSlider from './DestinationSlider'
import TravelPlatform from './TravelPlatform'
import Hero from './Hero'
import Services from './Services'

const Home = () => {
  return (
    <>
    <Hero/>
    <TravelPlatform/>
    <Services/>
    <DestinationSlider/>
       <TravelPoint/>
        <Features/>

    </>
 
  )
}

export default Home