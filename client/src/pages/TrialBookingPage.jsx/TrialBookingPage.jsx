import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { tagVariants, titleVariants, containerVariants, descriptionVariants } from '../../utils/animation';
import './TrialBookingPage.css'

const TrialBookingPage = () => {

    
  
    const imgVariants = () => ({
      initial: {
          y: '18rem'
     },
     animate: {
          y: '0rem',
          transition: {
           type: 'spring',
           duration: 2,
           stiffness: 30,
           }
     }
    })
   

    return (
        <div className="booking-wrapper">
        <div className="container">
            <div className="booking-container">
                <div className="info-container">

                {/* Left Side */}
                <div className="booking-left">
                    <div className="head">
                        <motion.span
                           initial="offscreen"
                           whileInView={"onscreen"}
                           variants={tagVariants} 
                          className='tag'>
                            WE ARE HERE FOR YOU
                            </motion.span>
                        <motion.span 
                           initial="offscreen"
                           whileInView={"onscreen"}
                           variants={titleVariants}
                          className='title'>
                            {" "}
                            Best Quality Medical
                        <br/> Treatment
                        </motion.span>
                        <motion.span
                           initial="offscreen"
                           whileInView={"onscreen"}
                           variants={descriptionVariants} 
                          className='description'>
                            Get your appointment through online and remain safe at your home.
                            </motion.span>
                    </div>

                    {/* Features */}
                    <div className="booking-features">
                        
                            <motion.div 
                            variants={containerVariants(1)}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='booking-feature' 
                            >
                               <span className='booking-description'>1000 +</span>
                               <span className='text'>Happy Patients</span>
                            </motion.div>
                            <motion.div 
                            variants={containerVariants(1)}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='booking-feature' 
                            >
                               <span className='booking-description'>200 +</span>
                               <span className='text'>Expert Doctors</span>
                            </motion.div>
                        
                    </div>
                </div>

                {/* Right Side */}
                <div className="booking-right">
                            
                                <motion.img 
                                 initial={"initial"}
                                 animate={"animate"}
                                 variants={imgVariants()}
                                 src="doctor.jpg" alt="doctor"
                                 className="small-rounded-image"
                                 />
                                 
                          </div>
            </div>

                  {/* Booking Block */}
                  
                  <motion.div 
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants(0.3)}
                  className="booking-info-container">

                     {/* First dropdown */}
                     <div>
                       <select></select>
                     </div>


                     {/* Second dropdown */}
                     <div>
                       <select></select>
                     </div>

                      {/* Third dropdown */}
                      <div>
                       <select></select>
                     </div>

                      {/* Fourth dropdown */}
                      <div>
                       <select></select>
                     </div>

                     <button className='booking-button'>Book</button>

                </motion.div>


            </div>
        </div>
    </div>
      );
}

export default TrialBookingPage