import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/Faq';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HowItWorks from './components/Howitworks';
import DemoShowcase from './components/DemoShowcase';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white">
      {/* Background animated dots */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute h-2 w-2 rounded-full bg-purple-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.8,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        {/* <DemoShowcase /> */}
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;