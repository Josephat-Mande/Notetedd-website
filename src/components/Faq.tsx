import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Sparkles } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How accurate is NoteTedd's transcription?",
      answer: "NoteTedd's AI transcription technology achieves over 95% accuracy for clear audio in standard accents. Our AI continually improves with usage and can adapt to different teaching styles, technical terminology, and various accents over time.",
      color: "#9B5DE5"
    },
    {
      question: "Does NoteTedd work offline?",
      answer: "The basic recording functionality works offline, but transcription and AI-powered features require an internet connection. With the Pro plan, you can download notes and quizzes for offline access after they've been processed.",
      color: "#e67e22"
    },
    {
      question: "Can I share my notes with classmates?",
      answer: "Yes! With the Student plan, you can share individual notes, and with the Pro plan, you can collaborate on notes in real-time with study groups. We've made it easy to share via link, email, or through common messaging platforms.",
      color: "#9B5DE5"
    },
    {
      question: "How does the AI quiz generation work?",
      answer: "NoteTedd's AI analyzes your lecture notes to identify key concepts, definitions, and relationships. It then generates various question formats (multiple choice, true/false, fill-in-the-blank) based on important information, closely mimicking the types of questions that would appear in real exams.",
      color: "#e67e22"
    },
    {
      question: "Is NoteTedd available on all devices?",
      answer: "Yes, NoteTedd is available as a web application and has native apps for iOS and Android devices. Your notes sync automatically across all your devices, allowing you to record on your phone and study on your laptop seamlessly.",
      color: "#9B5DE5"
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We take data privacy very seriously. All your notes are encrypted both in transit and at rest. We never share your content with third parties, and you maintain complete ownership of all your notes and study materials.",
      color: "#e67e22"
    }
  ];

  return (
    <>
    <Navbar />
    <>
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      {/* Gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold mb-6 backdrop-blur-xl border shadow-lg" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(230, 126, 34, 0.3)',
            color: '#e67e22'
          }}>
            <HelpCircle className="h-4 w-4 mr-2" />
            Got Questions?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            Frequently Asked <span style={{ color: '#9B5DE5' }}>Questions</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Everything you need to know about NoteTedd
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center p-6 rounded-2xl backdrop-blur-xl border text-left transition-all duration-300 ${
                  activeIndex === index 
                    ? 'shadow-xl' 
                    : 'shadow-lg hover:shadow-xl'
                }`}
                style={{
                  backgroundColor: activeIndex === index ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
                  borderColor: activeIndex === index ? `${faq.color}66` : `${faq.color}33`,
                  borderWidth: activeIndex === index ? '2px' : '1px'
                }}
              >
                <div className="flex items-start flex-1 pr-4">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300"
                    style={{ 
                      backgroundColor: activeIndex === index ? faq.color : `${faq.color}20`,
                      color: activeIndex === index ? '#FFF' : faq.color
                    }}
                  >
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#1F2937' }}>
                    {faq.question}
                  </h3>
                </div>
                <div 
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ 
                    backgroundColor: `${faq.color}20`,
                    color: faq.color
                  }}
                >
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div 
                  className="mt-2 p-6 rounded-2xl backdrop-blur-xl border"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderColor: `${faq.color}33`
                  }}
                >
                  <p className="leading-relaxed" style={{ color: '#4B5563' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support CTA */}
        <div 
          className={`mt-16 rounded-3xl p-10 backdrop-blur-xl border shadow-2xl max-w-2xl mx-auto relative overflow-hidden transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(155, 93, 229, 0.3)',
            transitionDelay: '700ms' 
          }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}></div>
          
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg" style={{
              background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)'
            }}>
              <MessageSquare size={32} className="text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: '#1F2937' }}>
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
              Our support team is here to help you get the most out of NoteTedd
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
              style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Contact Support Team
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
    </>
  );
};

export default FAQ;