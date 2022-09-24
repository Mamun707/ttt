import React from 'react'
import GalleryArea from '../components/hometwo/GalleryArea'
import PricingArea from '../components/hometwo/PricingArea'
import SliderArea from '../components/hometwo/SliderArea'
import HeaderTwo from '../components/HeaderTwo';
import Footer from '../components/Footer'


import { UpcomingMatch } from '../components/hometwo/UpcomingMatch';
import HighLights from '../components/hometwo/HighLights';
import MobilePart from '../components/hometwo/MobilePart';
import BlogDetailsArea from "../components/blogdetails/BlogDetailsArea"
import FooteerBanner from '../components/hometwo/FooteerBanner';

const HomeTwo = () => {
  return (
        <>
                <HeaderTwo/>
            <main>
                <SliderArea/>
                <GalleryArea/>
                <UpcomingMatch/>
                <HighLights/>
                <MobilePart/>
                <BlogDetailsArea/>
                <PricingArea/>
              
                {/* <UpcomingMovie/> */}
                
               
             
               
               
            </main>
            <FooteerBanner/>
                <Footer/>
        </>
  )
}

export default HomeTwo
