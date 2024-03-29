import React, { useState, useEffect} from 'react'
import './Hero.css'
import EmailBox from '../EmailBox/EmailBox'
import { HeroData } from '../../utils/data'
import { motion } from 'framer-motion'
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'

const Hero = () => {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1200);
  const { user, isAuthenticated } = useAuth0();

   useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const variants = (delay) => ({
      initial: {
           y: '18rem'
      },
      animate: {
           y: '0rem',
           transition: {
            type: 'spring',
            damping: 25,
            duration: 2.5,
            delay

           }
      }
  })

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
    <div className="h-wrapper">
        <div className="container">
          {/*
          <img src='hero/hero-arrow.png' alt='arrow' className='h-arrow'/>  
           */}
            <div className="h-container">
                {/* Left Side */}
                <div className="h-left">
                  <div className="image-row">
                    {
                        HeroData.slice(0, 3).map((person, i) => (
                          <div className="person-pill" key={i}>
                            <motion.div 
                              initial={"initial"}
                              animate={"animate"}
                              variants={variants(person.delay)}
                              style={{backgroundColor: person.bg}}
                              className="person-pill-bg">
                                <motion.img 
                                 initial={"initial"}
                                 animate={"animate"}
                                 variants={imgVariants()}
                                 src={person.src} alt={person.src}/>
                            </motion.div>
                          </div>
                        ))
                    }
                  </div>

                  <div className="image-row">
                    {
                        HeroData.slice(3, 6).map((person, i) => (
                          <div className="person-pill" key={i}>
                            <motion.div 
                              initial={"initial"}
                              animate={"animate"}
                              variants={variants(person.delay)}
                              style={{backgroundColor: person.bg}}
                              className="person-pill-bg">
                                <motion.img 
                                   initial={"initial"}
                                   animate={"animate"}
                                   variants={imgVariants()}
                                   src={person.src} alt={person.src}/>
                            </motion.div>
                          </div>
                        ))
                    }
                  </div>

                </div>

                 {/* Right Side */}
                 <div className="h-right">
                 <div className="h-title">
                    <span>Your Health</span>
                    <span>Our Priority</span>
                    <span>Simplifying Medical Care</span>
                 </div>

                 <div className="h-description">
                 Discover a revolutionary way to book your medical appointments from the comfort of your home or anywhere you go.
                 </div>
              
                 {isMobileView ? (
    isAuthenticated ? (
       <NavLink to='/booking'>
         <button className="book-button">Book Your Visit</button>
       </NavLink>
    ) : (
      <EmailBox />
    )
  ) : (
    <EmailBox />
  )}

                 </div>
            </div>
        </div>
    </div>
  )
}

export default Hero