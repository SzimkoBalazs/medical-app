import React from 'react'
import {motion, useAnimation } from 'framer-motion';
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import BrandingVideo from "../components/BrandingVideo/BrandingVideo";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import OurDifference from "../components/OurDifference/OurDifference";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import OurGoal from "../components/OurGoal/OurGoal";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";



 const Website = () => {

    const controls = useAnimation();

  return (
    <motion.div className="app" animate={controls}>
    
    <Hero/>
    <BrandingVideo/>
    <WhatWeDo/>

    <motion.div
       onViewportEnter={() => controls.start({
        backgroundColor: "var(--secondary-color)",
       })}
       onViewportLeave={() => controls.start({
        backgroundColor: "white",
       })}
       viewport={{amount: 0.4}}
       >
        <OurDifference/>
       </motion.div>

       <HowItWorks/>

       <motion.div
       onViewportEnter={() => controls.start({
        backgroundColor: "var(--primary-color)",
       })}
       onViewportLeave={() => controls.start({
        backgroundColor: "white",
       })}
       viewport={{amount: 0.4}}
       >
        <OurGoal/>
       </motion.div>
   
       <Testimonials/>
       
 </motion.div>
  )
}

export default Website