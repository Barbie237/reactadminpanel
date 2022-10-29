import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
  
function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-cont'>
      <div className='hero-btns'>
        <h1>   SOFTWARE CONSULTING AND DEVELOPMENT
            FOR YOUR DIGITAL SUCCESS <br/><br/> <p>What are you waiting for?</p></h1>
        
        <Button 
        className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            CONTACT US
        </Button>
      </div>
      
        {/* <Button 
        className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
            Our Mission is to increase the Productivity of SMEs by providing Reliable, Scalable <br/>
             and Performant Digital Solutions that will meet daily needs and reduce their workloads. {/*<i className='far 
            fa-play-circle'/> 
        </Button> */}
        </div>
    </div>
  )
}

export default HeroSection
