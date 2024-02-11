import React from 'react'
import './WhatWeDo.css'
import { features } from '../../utils/data'
import { motion } from 'framer-motion'
import { containerVariants, titleVariants, tagVariants, descriptionVariants } from '../../utils/animation'

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
        <div className="container">
            <div className="wwd-container">
                {/* Head of section */}
                <div className="wwd-head">
                    <motion.span 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={tagVariants}
                     className='tag'>
                        What we do
                        </motion.span>
                    <motion.span 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={titleVariants}
                     className='title'>
                        {" "}
                        Explore the Future of Healthcare Services with MediVisit
                    </motion.span>
                    <motion.span 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={descriptionVariants}
                     className='description'>
                        Here is how to achieve
                        </motion.span>
                </div>

                {/* Two blocks */}
                <div className="wwd-blocks">

                     {/* First block */}
                    <div className="wwd-block">
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className='sec-title'>
                            Revolutionary Booking System
                        </motion.span>
                        <motion.span 
                          initial="offscreen"
                          whileInView={"onscreen"}
                          variants={descriptionVariants}
                          className='text'>
                            Book appointments seamlessly and efficiently from anywhere, anytime
                        </motion.span>

                        <div className="block-features">
                          {
                            features.slice(0,3).map((feature, i) => (
                                <motion.div 
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={containerVariants((i+1)*0.1)}
                                className='block-feature' 
                                key={i}>
                                    <img src={feature.icon} alt="feature" width={60} height={60}/>
                                    <span>{feature.title}</span>
                                </motion.div>
                            ))
                          }
                        </div>
                    </div>

                     {/* Second block */}
                    <div className="wwd-block">
                    <motion.span 
                       initial="offscreen"
                       whileInView={"onscreen"}
                       variants={titleVariants} 
                       className='sec-title'>
                        Enhanced Patient Experience
                    </motion.span>
                        <motion.span 
                           initial="offscreen"
                           whileInView={"onscreen"}
                           variants={descriptionVariants}
                           className='text'>
                            Empower patients with a user-friendly platform for hassle-free medical appointments.
                            </motion.span>

                        <div className="block-features">
                          {
                            features.slice(3,6).map((feature, i) => (
                                <motion.div 
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={containerVariants((i+1)*0.1)}
                                className='block-feature' 
                                key={i}>
                                    <img src={feature.icon} alt="feature" width={60} height={60}/>
                                    <span>{feature.title}</span>
                                </motion.div>
                            ))
                          }
                        </div>
                    </div>
                </div>

                {/* Support block */}
                <motion.div 
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants(0.3)}
                  className="wwd-support">

                     {/* Left side */}
                     <div>
                        <span className='sec-title'>Exceptional Care</span>
                        <span className='description'>We're dedicated to providing superior healthcare solutions 
                        </span>
                     </div>

                    {/* Right side */}
                    <div>
                        <span className='text'>Experience the MediVisit difference and embark on a journey towards optimal health and well-being.</span>
                        <span className='text'>Our commitment to excellence ensures a seamless and satisfying experience for all our patients.</span>
                     </div>

                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo