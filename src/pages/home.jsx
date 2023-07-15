import React from 'react'
import Header  from '../containers/header/Header'
import Brand  from '../components/brand/Brand'
import WhatGPT3 from '../containers/whatGPT3/WhatGPT3'
import  Features  from '../components/feature/Feature'
import  Possibility  from '../containers/possibility/Possibility'
import CTA  from '../components/cta/CTA'
import Blog from '../containers/blog/Blog'
import Footer  from '../containers/footer/Footer'


const home = () => {
  return (
    <div>
    <Header />
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
     <CTA /> 
    <Blog />
    <Footer />
</div>
  )
}

export default home
