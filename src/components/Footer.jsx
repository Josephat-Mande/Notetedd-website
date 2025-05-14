import React, { useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <h3 className="text-2xl font-bold text-white">NoteTedd</h3>
            </div>
            <p className="mb-6 text-gray-400">
              Revolutionizing the way students learn with AI-powered note-taking, 
              quiz generation, and audio summaries.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/pages/notetedd" className="bg-gray-800 hover:bg-indigo-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook size={18}  />
              </a>
              <a href="https://www.x.com/notetedd" className="bg-gray-800 hover:bg-indigo-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/notetedd" className="bg-gray-800 hover:bg-indigo-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/notetedd/" className="bg-gray-800 hover:bg-indigo-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Home</span>
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Features</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Pricing</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">

              <li >
              <a href="mailto:info@notetedd.com" className="flex items-start">
                <Mail className="mr-3 text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <span>info@notetedd.com</span>
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <span>+254 115911220</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <span>Tech Hub, University Way, Nairobi</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter to get the latest updates about our product.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-300"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-gray-800" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NoteTedd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;