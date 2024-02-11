import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="container">
            <div className="f-container">
                <span className="title">Keep In Touch!</span>
                <EmailBox/>

                <hr/>
                <div className="f-menu">
                  <span>Home</span>
                  <span>What we do</span>
                  <span>How it works</span>
                  <span>Our Goal</span>
                  <span>Testimonials</span>
                </div>
                <hr/>
                <span className="text">MediVisit 2024 | All right's reserved.</span>
            </div>
        </div>
    </div>
  )
}

export default Footer