import React from 'react';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/ui/AboutUs';
import TechnologyInnovationPage from './components/ui/TechnologyInnovationPage';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StrategicMilitaryBackground from './components/ui/StrategicMilitaryBackground';
import Header from './components/ui/Header';
import { ScrollLockShowcase, ScrollLockShowcase2, ScrollLockShowcase3 } from './components/ui/ScrollLockShowcase';
import Spline from '@splinetool/react-spline';
import { Parallax } from 'react-scroll-parallax';

function App() {
  return (
    <div className="relative min-h-screen text-white bg-black">
      <StrategicMilitaryBackground />
      <Header />
      <div className="relative z-10">
        <Hero />
        <div className="py-16" />
        <FeaturedProducts />
        <div className="py-24" />
        {/* Remove the OUR DRONES heading */}
        {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">OUR DRONES</h2> */}
        <ScrollLockShowcase className="-mt-72" />
        <ScrollLockShowcase2 />
        <ScrollLockShowcase3 />
        <div className="py-48" />
        <AboutUs />
        <div className="py-40" />
        {/* 3D Spline Scene after AboutUs */}
        <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden py-24">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center">
            SEAMLESS CONTROL
          </h2>
          <h2 className="text-5xl md:text-7xl font-bold text-4CAF50 mb-8 text-center">
            AND RESPONSIVENESS
          </h2>
          <div className="relative w-full h-full flex-1 flex items-center justify-center">
            <Spline scene="https://prod.spline.design/hQxxN1QdgZQX2OW0/scene.splinecode" />
          </div>
        </section>
        <div className="py-40" />
        <TechnologyInnovationPage />
        <div className="py-40" />
        <Testimonials />
        <div className="py-40" />
        <Contact />
        <div className="py-40" />
        <Footer />
      </div>
    </div>
  );
}

export default App;