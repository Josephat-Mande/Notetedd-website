import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const ContactPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white min-h-screen">
      <Navbar scrollY={scrollY} />
      <main className="container mx-auto px-4 py-24">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
