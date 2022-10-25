import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

  
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='.../public/videos/video-2.mp4' 
      autoPlay loop muted />
      <h1> SOFTWARES DEVELOPMENT ? </h1>
       <p>What are you waiting for? </p>
      <div className='hero-btns'>
        <Button 
        className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            GET STARTED
        </Button>
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
