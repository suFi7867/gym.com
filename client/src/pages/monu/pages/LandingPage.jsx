import React from 'react'
import BigGallery from '../components/BigGallery'
import Choose from '../components/Choose'
import FrontCarousel from '../components/FrontCarousel'
import Gallery from '../components/Gallery'
import Girl from '../components/Girl'
import Pricing from '../components/Pricing'
import Trainer from '../components/Trainer'
import "../styles/LandingPage.css"
const LandingPage = () => {
  return (
    <div>
        <FrontCarousel />
        <Choose />
        <Girl />
        <Pricing />
        <BigGallery />
        {/* <Gallery /> */}
        <Trainer />
    </div>
  )
}

export default LandingPage