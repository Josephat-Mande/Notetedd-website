import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ChevronDown } from 'lucide-react';

const Navbar = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <header className={`fixed w-full top-0 left-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-indigo-950/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src="/tedd-icon.jpg" alt="logo" className="h-20 w-20 rounded-4xl object-cover bg-transparent"/>
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 bg-clip-text text-transparent">
              NoteTedd
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#problem" className="text-gray-300 hover:text-white transition-colors">Problem</a>
            <a href="#solution" className="text-gray-300 hover:text-white transition-colors">Solution</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
            
            {/* <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4" onClick={() => { alert("coming soon"); setTimeout(() => {}, 3000); }}/>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-indigo-950 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                <div className="py-1 rounded-md bg-gray-900 shadow-xs">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Documentation</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">API</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Blog</a>
                </div>
              </div>
            </div> */}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full pt-20 px-6 space-y-8">
          <a 
            href="#problem" 
            className="text-xl text-gray-300 hover:text-white border-b border-gray-800 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Problem
          </a>
          <a 
            href="#solution" 
            className="text-xl text-gray-300 hover:text-white border-b border-gray-800 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Solution
          </a>
          <a 
            href="#features" 
            className="text-xl text-gray-300 hover:text-white border-b border-gray-800 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-xl text-gray-300 hover:text-white border-b border-gray-800 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="text-xl text-gray-300 hover:text-white border-b border-gray-800 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            className="text-xl text-gray-300 hover:text-white border-b border-gray-800 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          
          <button className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium py-3 px-4 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;