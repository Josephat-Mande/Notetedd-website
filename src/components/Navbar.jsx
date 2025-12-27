import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '/contact' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <header 
        className={`fixed w-full top-0 left-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-2 md:py-3 shadow-lg' : 'py-3 md:py-5'
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)'
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <div className="relative">
                <img 
                  src="/tedd-icon.jpg" 
                  alt="NoteTedd Logo" 
                  className="h-10 w-10 md:h-12 md:w-12 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  style={{
                    background: 'linear-gradient(135deg, rgba(155, 93, 229, 0.3) 0%, rgba(230, 126, 34, 0.3) 100%)'
                  }}
                ></div>
              </div>
              <span 
                className="ml-2 md:ml-3 text-xl md:text-2xl font-extrabold transition-all duration-300"
                style={{ color: '#080707' }}
              >
                NoteTedd
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105"
                  style={{ color: '#6B7280' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = index % 2 === 0 
                      ? 'rgba(155, 93, 229, 0.1)' 
                      : 'rgba(230, 126, 34, 0.1)';
                    e.currentTarget.style.color = index % 2 === 0 ? '#9B5DE5' : '#e67e22';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#6B7280';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div 
              onClick={() => window.location.href = '/download'}
              className="hidden lg:block"
            >
              <button 
                className="group relative hover:cursor-pointer overflow-hidden font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
                style={{ background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' }}
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(155, 93, 229, 0.1)',
                color: '#9B5DE5'
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`
          lg:hidden fixed top-0 right-0 h-full w-full sm:w-96 z-50 
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div 
            className="flex items-center justify-between p-4 border-b" 
            style={{ borderColor: 'rgba(155, 93, 229, 0.2)' }}
          >
            <a 
              href="/" 
              className="flex items-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              <img 
                src="/tedd-icon.jpg" 
                alt="NoteTedd Logo" 
                className="h-10 w-10 rounded-2xl object-cover shadow-lg"
              />
              <span 
                className="ml-2 text-xl font-extrabold" 
                style={{
                  background: 'linear-gradient(135deg, #9B5DE5 0%, #e67e22 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                NoteTedd
              </span>
            </a>
            <button
              className="p-2 rounded-xl transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(230, 126, 34, 0.1)',
                color: '#e67e22'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 border"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderColor: index % 2 === 0 ? 'rgba(155, 93, 229, 0.2)' : 'rgba(230, 126, 34, 0.2)',
                    color: '#1F2937'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{
                        backgroundColor: index % 2 === 0 ? '#9B5DE5' : '#e67e22'
                      }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <button 
              className="mt-6 w-full font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg text-white"
              style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = '/download';
              }}
            >
              Get Started Free
            </button>

            {/* Mobile Menu Footer */}
            <div 
              className="mt-6 pt-4 border-t text-center" 
              style={{ borderColor: 'rgba(155, 93, 229, 0.2)' }}
            >
              <p 
                className="text-xs mb-3" 
                style={{ color: '#6B7280' }}
              >
                Join 5,000+ students already using NoteTedd
              </p>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4" fill="#e67e22" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p 
                className="text-xs mt-2 font-bold" 
                style={{ color: '#9B5DE5' }}
              >
                4.9/5 Average Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;