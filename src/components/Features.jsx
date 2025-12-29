import { useState, useEffect, useRef } from 'react';
import { Mic, BookOpen, BrainCircuit, Clock, Lightbulb, Headphones, Sparkles, Zap } from 'lucide-react';
import { href } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
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

  const featureItems = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Automated Note Taking",
      description: "Real-time lecture transcription with AI-driven categorization to help students capture key concepts without hassle.",
      color: "#e67e22",
      gradient: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Smart Organization",
      description: "Automatically categorize and organize notes by topic, making it easier to find and review specific content.",
      color: "#9B5DE5",
      gradient: "linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)"
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "AI Generated Quizzes",
      description: "Create custom quizzes from lecture content to test understanding and enhance exam preparation.",
      color: "#e67e22",
      gradient: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Audio Notes",
      description: "Convert written notes to audio format, allowing students to review content while commuting or multitasking.",
      color: "#9B5DE5",
      gradient: "linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time-Saving",
      description: "Reclaim hours spent on manual note-taking and organization to focus on understanding complex concepts.",
      color: "#e67e22",
      gradient: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Focus Enhancement",
      description: "Combat lecture attention span limitations by ensuring all content is captured, even beyond peak concentration time.",
      color: "#9B5DE5",
      gradient: "linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)"
    }
  ];

  return (
    <>
    <Navbar/>
    <>
    <section 
      id="features" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      {/* Gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute -bottom-20 -right-32 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
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
            
            Powerful Features
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            Everything You Need to <span style={{ color: '#9B5DE5' }}>Excel</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            NoteTedd combines cutting-edge AI technology with thoughtful design to transform how students learn and study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className={`rounded-2xl p-8 backdrop-blur-xl border shadow-lg relative overflow-hidden transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                backgroundColor: hoveredFeature === index ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
                borderColor: hoveredFeature === index ? `${feature.color}66` : `${feature.color}33`,
                borderWidth: hoveredFeature === index ? '2px' : '1px',
                transitionDelay: `${150 * index}ms` 
              }}
            >
              {/* Background glow */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, ${feature.color} 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                  opacity: hoveredFeature === index ? 0.2 : 0.1
                }}
              ></div>
              
              {/* Animated corner accent */}
              {hoveredFeature === index && (
                <div 
                  className="absolute top-0 right-0 w-20 h-20 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${feature.color}20 50%)`,
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                  }}
                ></div>
              )}
              
              <div className="relative z-10">
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 shadow-lg transition-all duration-300"
                  style={{
                    background: hoveredFeature === index ? feature.gradient : `${feature.color}20`,
                    color: hoveredFeature === index ? '#FFF' : feature.color,
                    transform: hoveredFeature === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                  }}
                >
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
                
                {/* Progress indicator on hover */}
                {hoveredFeature === index && (
                  <div className="mt-4 pt-4 border-t" style={{ borderColor: `${feature.color}33` }}>
                    <div className="flex items-center justify-between text-xs font-bold" style={{ color: feature.color }}>
                      <span>Explore Feature</span>
                      <Sparkles className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="rounded-3xl p-12 backdrop-blur-xl border shadow-2xl max-w-3xl mx-auto relative overflow-hidden" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(155, 93, 229, 0.3)'
          }}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{
              background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{
              background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
                Ready to Transform Your Learning?
              </h3>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#6B7280' }}>
                See how NoteTedd can help you study smarter and achieve better grades with AI-powered features.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                
                <button 
                onClick={href('www.notetedd.com/install')}
                  className="font-bold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-xl border-2 hover:scale-105 hover:cursor-pointer shadow-lg"
                  style={{ 
                    borderColor: 'rgba(230, 126, 34, 0.4)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    color: '#e67e22'
                  }}
                >
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    
    </>
  );
};

export default Features;