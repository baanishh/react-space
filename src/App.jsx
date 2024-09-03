import React, { useEffect } from 'react'
import bgVideo from './assets/earth-bg.mp4'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration (optional)
        once: true,     // Whether animation should happen only once - while scrolling down (optional)
    });
}, []);
  return (
    <div>
      <div className="h-[700px] relative">
        
        <video autoPlay loop muted playsInline preload="metadata" 
        className='fixed top-0 right-0 w-full object-cover z[-1] h-[700px] ' >
          <source src={bgVideo} type='video/mp4' />
        </video>

        <Navbar />
        <Hero />

      </div>

    {/* service-card-section */}
    <Services />
    <Banner />
    <Banner2 />
    <Footer />
    </div>
  )
}

export default App
