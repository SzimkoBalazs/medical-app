import React from 'react'
import './Testimonials.css'
import SlickSlider from './SlickSlider'

const Testimonials = () => {
  return (
    <div className="t-wrapper">
        <div className="container">
            <div className="t-container">
                {/* Head */}
                <div className="t-head">
                    <span className='tag'>Testimonials</span>
                    <span className='title'>Your Opinion Matters</span>
                    <span className="description">What people say about us</span>
                </div>
            </div>
             {/* Slider */}
             <SlickSlider/>
        </div>
    </div>
  )
}

export default Testimonials