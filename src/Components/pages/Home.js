import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Slider from '../slider/Slider'


function Home() {
    return (
        <>
            <Slider />
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;