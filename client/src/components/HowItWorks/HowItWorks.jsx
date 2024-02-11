import React from 'react'
import'./HowItWorks.css'
import { hitFeatures } from '../../utils/data' 

import { motion } from 'framer-motion'
import { tagVariants, titleVariants } from '../../utils/animation' 

const HowItWorks = () => {

   const featureVariants = {
    offscreen: {
        scale: 0.5
    },
    onscreen: {
        scale: 1,
        transition: {
            type: "spring",
            duration: 1.5,
        },
    },
   }

  return (
    <div className="hiw-wrapper">
        <div className="container">
            <div className="hiw-container">
                {/* Head */}
                <div className="hiw-head">
                    <motion.span 
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={tagVariants}
                      className='tag'>
                        How it works
                        </motion.span>
                    <motion.span 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={titleVariants}
                      className='title'>
                        Write also something here
                        </motion.span>
                </div>

                 {/* Features */}
                <div className="hiw-features">
                  {
                    hitFeatures.map((feature, i) => (
                        <motion.div 
                        variants={featureVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='hiw-feature' 
                        key={i}
                        >
                            {/* Left Side */}
                            <motion.div 
                              initial={{opacity: 0, x: -100}}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: "easeIn",
                                    duration: 1,
                                    delay: .7
                                }
                              }}
                              className="detail">
                               <span className='des'>0{i+1}</span>
                               <span className='sec-title'>{feature.title}</span>
                               <span className='text'>{feature.des}</span>
                            </motion.div>

                            {/* Right Side */}
                            <div className="icon">
                                <img src={feature.icon} width={128} height={128} alt='feature' style={{translate: "50% 0rem"}}/>
                            </div>
                        </motion.div>
                    ))
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks