import { useState, useEffect, useRef } from 'react';
import { Mic, FileText, BookOpen, BookCheck, ArrowRight, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Record & Transcribe",
      description: "Open NoteTedd during your lecture, and it will automatically record and transcribe everything in real-time.",
      color: "#e67e22",
      gradient: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)",
      number: "01"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI Organization",
      description: "Our AI instantly organizes content, highlighting key concepts and categorizing information into relevant topics.",
      color: "#9B5DE5",
      gradient: "linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)",
      number: "02"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Convert & Review",
      description: "Convert your notes to audio and review them on the go, or use the app's study mode to focus on specific topics.",
      color: "#e67e22",
      gradient: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)",
      number: "03"
    },
    {
      icon: <BookCheck className="w-8 h-8" />,
      title: "Test Knowledge",
      description: "Generate custom quizzes based on your notes to test your understanding and prepare for exams effectively.",
      color: "#9B5DE5",
      gradient: "linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)",
      number: "04"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      {/* Gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold mb-6 backdrop-blur-xl border shadow-lg" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(155, 93, 229, 0.3)',
            color: '#9B5DE5'
          }}>
            
            Simple Process
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            How <span style={{ color: '#e67e22' }}>NoteTedd</span> Works
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            A simple four-step process to transform your lecture experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 rounded-full" style={{ 
              backgroundColor: '#E5E7EB',
              left: '10%',
              right: '10%'
            }}>
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${((activeStep + 1) / 4) * 100}%`,
                  background: 'linear-gradient(90deg, #e67e22 0%, #9B5DE5 50%, #e67e22 100%)'
                }}
              ></div>
            </div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  } ${activeStep === index ? 'scale-105' : 'hover:scale-105'}`}
                  style={{ transitionDelay: `${150 * index}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div 
                      className="relative rounded-full p-6 mb-6 shadow-lg transition-all duration-500"
                      style={{
                        background: activeStep === index ? step.gradient : `${step.color}20`,
                        borderWidth: '2px',
                        borderColor: activeStep === index ? step.color : `${step.color}33`,
                        transform: activeStep === index ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      {/* Pulse effect when active */}
                      {activeStep === index && (
                        <div 
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{ backgroundColor: `${step.color}40` }}
                        ></div>
                      )}
                      
                      <div className="relative z-10" style={{ 
                        color: activeStep === index ? '#FFF' : step.color 
                      }}>
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Step Number Badge */}
                    <div 
                      className="absolute top-0 -right-2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg transition-all duration-300"
                      style={{
                        background: activeStep === index ? step.gradient : 'rgba(255, 255, 255, 0.9)',
                        color: activeStep === index ? '#FFF' : step.color,
                        borderWidth: '2px',
                        borderColor: `${step.color}33`
                      }}
                    >
                      {step.number}
                    </div>
                    
                    {/* Content Card */}
                    <div 
                      className="rounded-2xl p-6 backdrop-blur-xl border shadow-lg transition-all duration-300 w-full"
                      style={{
                        backgroundColor: activeStep === index ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
                        borderColor: activeStep === index ? `${step.color}66` : `${step.color}33`,
                        borderWidth: activeStep === index ? '2px' : '1px'
                      }}
                    >
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>
                        {step.title}
                      </h3>
                      <p style={{ color: '#6B7280', lineHeight: '1.6', fontSize: '0.95rem' }}>
                        {step.description}
                      </p>
                      
                      {/* Active indicator */}
                      {activeStep === index && (
                        <div className="mt-4 pt-4 border-t" style={{ borderColor: `${step.color}33` }}>
                          <div className="flex items-center justify-center text-xs font-bold" style={{ color: step.color }}>
                            <span>Active Step</span>
                            <div className="ml-2 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: step.color }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Arrow connector for mobile/tablet */}
                  {index < 3 && (
                    <div className="flex justify-center my-6 lg:hidden">
                      <ArrowRight className="h-6 w-6" style={{ color: '#6B7280' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="rounded-3xl p-10 backdrop-blur-xl border shadow-2xl max-w-2xl mx-auto relative overflow-hidden" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(230, 126, 34, 0.3)'
          }}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{
              background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
                Ready to Get Started?
              </h3>
              <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
                Join thousands of students already improving their study efficiency
              </p>
              
              <a 
                href="/download" 
                className="inline-flex items-center justify-center font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
                style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}
              >
                Start Improving Your Studies Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;