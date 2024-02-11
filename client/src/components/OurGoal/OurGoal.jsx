import React from 'react'
import './OurGoal.css'
import { whoWeInvest } from '../../utils/data' 
import { motion } from 'framer-motion'
import { containerVariants, tagVariants, titleVariants } from '../../utils/animation'

const OurGoal = () => {
  return (
    <div className="og-wrapper">
        <div className="container">
            <div className="og-container">

                {/* Left Side */}
                <div className="og-left">
                    <div className="head">
                        <motion.span
                           initial="offscreen"
                           whileInView={"onscreen"}
                           variants={tagVariants} 
                          className='tag'>
                            Placeholder text
                            </motion.span>
                        <motion.span 
                           initial="offscreen"
                           whileInView={"onscreen"}
                           variants={titleVariants}
                          className='title'>
                            {" "}
                            Some Placeholder
                        <br/> and some more text
                        </motion.span>
                    </div>

                    {/* Features */}
                    <div className="og-features">
                        {whoWeInvest.map((feature, i) => (
                            <motion.div 
                            variants={containerVariants(i * 0.05 + 1)}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='og-feature' 
                            key={i}>
                               <span className='description'>{feature.title}</span>
                               <span className='text'>{feature.des}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side */}
                <div className="og-right">
                    <motion.img 
                     variants={containerVariants(0.5)}
                     initial="offscreen"
                     whileInView={"onscreen"}
                    src="persons.png" alt="persons" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurGoal