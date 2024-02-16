import React from 'react'
import './OurDifference.css'
import { ourDiffFeatures } from '../../utils/data' 
import { motion } from 'framer-motion'
import { containerVariants, titleVariants, tagVariants, descriptionVariants } from '../../utils/animation'

const OurDifference = () => {
  return (
    <div className="od-wrapper">
        <div className="container">
            <div className="od-container">
                {/* Head */}
                <div className="od-head">
                    <motion.span 
                       initial="offscreen"
                       whileInView={"onscreen"}
                       variants={tagVariants}
                       className='tag'>
                        Our Difference
                        </motion.span>
                    <motion.span 
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={titleVariants}
                         className='title'>
                        Distinctive Care, Innovative Approach
                        </motion.span>
                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={descriptionVariants}
                        className='text'>
                        At MediVisit, we're redefining patient care with cutting-edge technology and a patient-first philosophy. 
                    Discover how our unique features set us apart in providing accessible, efficient, and personalized healthcare experiences. 
                    </motion.span>
                </div>

                {/* Features */}
                <div className="od-features">
                    {
                        ourDiffFeatures.map((feature, i) => (
                            <motion.div 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={containerVariants((i + 1) * 0.1)}
                            key={i} 
                            className='od-feature'>
                                <img src={feature.icon} alt="feature" width={128} height={128} />
                                <span className='sec-title'>{feature.title}</span>
                                <span className='text'>{feature.des}</span>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurDifference