import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Newsletter subscription:', email);
    alert('Thanks for subscribing!');
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: 'https://www.facebook.com/pages/notetedd', name: 'Facebook' },
    { icon: <Twitter size={18} />, href: 'https://www.x.com/notetedd', name: 'Twitter' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/notetedd_', name: 'Instagram' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/notetedd/', name: 'LinkedIn' }
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full" style={{
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full" style={{
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mr-3 shadow-lg" 
              >
                <span className="text-white font-bold text-2xl"><img src="./tedd-icon.jpg" alt="notetedd icon" /></span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">NoteTedd</h3>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Learning Redefined
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#D1D5DB'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = index % 2 === 0 
                      ? 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)'
                      : 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)';
                    e.currentTarget.style.color = '#FFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#D1D5DB';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center group transition-all duration-300"
                    style={{ color: '#D1D5DB' }}
                  >
                    <ArrowRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 mr-2"
                      style={{ color: '#9B5DE5' }}
                    />
                    <span className="group-hover:translate-x-2 transition-transform duration-300 group-hover:font-bold" style={{
                      color: '#D1D5DB'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#9B5DE5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                    >
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@notetedd.com" 
                  className="flex items-start group transition-colors duration-300"
                  style={{ color: '#D1D5DB' }}
                >
                  <div 
                    className="p-2 rounded-lg mr-3 mt-0.5 flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: 'rgba(230, 126, 34, 0.2)', color: '#e67e22' }}
                  >
                    <Mail size={16} />
                  </div>
                  <span className="group-hover:font-bold">notetedd@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start" style={{ color: '#D1D5DB' }}>
                <div 
                  className="p-2 rounded-lg mr-3 mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: 'rgba(155, 93, 229, 0.2)', color: '#9B5DE5' }}
                >
                  <Phone size={16} />
                </div>
                <span>+254 704 697 508</span>
              </li>
              <li className="flex items-start" style={{ color: '#D1D5DB' }}>
                <div 
                  className="p-2 rounded-lg mr-3 mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: 'rgba(230, 126, 34, 0.2)', color: '#e67e22' }}
                >
                  <MapPin size={16} />
                </div>
                <span> University Way, Nairobi</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Subscribe to our newsletter to get the latest updates about our product.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <Mail 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2" 
                  size={18}
                  style={{ color: '#9B5DE5' }}
                />
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFF',
                    outline: 'none'
                  }}
                />
              </div>
              <button 
                onClick={handleSubscribe}
                className="font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-white flex items-center justify-center group"
                style={{ background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' }}
              >
                
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#9CA3AF' }}>
              © {new Date().getFullYear()} NoteTedd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="PrivacyPolicy" 
                className="text-sm transition-colors duration-300 hover:font-bold"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#9B5DE5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm transition-colors duration-300 hover:font-bold"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#e67e22'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                Terms of Service
              </a>
              <a 
                href="#faq" 
                className="text-sm transition-colors duration-300 hover:font-bold"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#9B5DE5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;