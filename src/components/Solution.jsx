import { useState, useEffect, useRef } from 'react';
import { Mic, Sparkles, BookOpen, Lightbulb, ArrowRight, Headphones, Brain, Zap } from 'lucide-react';

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);
  const sectionRef = useRef(null);

  const screens = [
    { 
      id: 0, 
      image: '/lectures.jpg', 
      title: 'Live Lectures',
      description: 'Real-time transcription',
      color: '#e67e22',
      icon: <BookOpen className="h-5 w-5" />
    },
    { 
      id: 1, 
      image: '/quizzes.jpg', 
      title: 'AI Quizzes',
      description: 'Test your knowledge',
      color: '#9B5DE5',
      icon: <Brain className="h-5 w-5" />
    },
    { 
      id: 2, 
      image: '/recordings.jpg', 
      title: 'Recordings',
      description: 'Review anytime',
      color: '#e67e22',
      icon: <Mic className="h-5 w-5" />
    },
    { 
      id: 3, 
      image: '/audio-notes.jpg', 
      title: 'Audio Notes',
      description: 'Listen on the go',
      color: '#9B5DE5',
      icon: <Headphones className="h-5 w-5" />
    }
  ];

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
        setActiveScreen((prev) => (prev + 1) % screens.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section 
      id="solution" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      {/* Gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
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
            
            Smart Solution
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            The <span style={{ color: '#9B5DE5' }}>Solution</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            NoteTedd is an AI-powered learning assistant that transcribes live lectures and predicts quiz questions based on lecture content.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          {/* iPhone Frame with Carousel */}
          <div 
            className={`lg:w-1/2 flex justify-center transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              {/* iPhone 14 Pro Frame */}
              <div className="relative w-[320px] h-[650px] rounded-[50px] shadow-2xl" style={{ backgroundColor: '#1F2937' }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] rounded-b-3xl z-20" style={{ backgroundColor: '#1F2937' }}></div>
                
                {/* Screen Container */}
                <div className="absolute inset-[12px] rounded-[38px] overflow-hidden" style={{ backgroundColor: '#000' }}>
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 z-10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <span className="text-white text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 rounded-sm border border-white"></div>
                      <div className="w-2 h-3 rounded-sm bg-white"></div>
                    </div>
                  </div>
                  
                  {/* Screen Images */}
                  <div className="relative w-full h-full">
                    {screens.map((screen, idx) => (
                      <div
                        key={screen.id}
                        className={`absolute inset-0 transition-all duration-700 ${
                          idx === activeScreen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                      >
                        {/* Screen image (from public/) with overlay */}
                        <div
                          className="w-full h-full flex items-center justify-center text-white"
                          style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.12)), url(${screen.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          <div className="text-center p-8">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-xl shadow-xl" style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              borderWidth: '2px',
                              borderColor: 'rgba(255, 255, 255, 0.3)'
                            }}>
                              {screen.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{screen.title}</h3>
                            <p className="text-sm opacity-90">{screen.description}</p>
                            {/* <div className="mt-8 text-xs opacity-70">
                              Replace with: {screen.image}
                            </div> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>
                </div>
                
                {/* Side Buttons */}
                <div className="absolute left-0 top-28 w-1 h-12 rounded-r-lg" style={{ backgroundColor: '#0F172A' }}></div>
                <div className="absolute left-0 top-44 w-1 h-16 rounded-r-lg" style={{ backgroundColor: '#0F172A' }}></div>
                <div className="absolute left-0 top-64 w-1 h-16 rounded-r-lg" style={{ backgroundColor: '#0F172A' }}></div>
                <div className="absolute right-0 top-52 w-1 h-20 rounded-l-lg" style={{ backgroundColor: '#0F172A' }}></div>
              </div>
              
              {/* Floating Feature Pills */}
              <div className="absolute -left-4 top-32 transform -translate-x-full mr-4 space-y-4">
                <div 
                  className={`rounded-2xl px-4 py-3 backdrop-blur-xl border shadow-lg transition-all duration-700 delay-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'rgba(230, 126, 34, 0.3)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}>
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold" style={{ color: '#1F2937' }}>Real-time</div>
                      <div className="text-xs" style={{ color: '#6B7280' }}>Transcription</div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`rounded-2xl px-4 py-3 backdrop-blur-xl border shadow-lg transition-all duration-700 delay-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'rgba(155, 93, 229, 0.3)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' }}>
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold" style={{ color: '#1F2937' }}>AI-Powered</div>
                      <div className="text-xs" style={{ color: '#6B7280' }}>Summaries</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 top-80 transform translate-x-full ml-4">
                <div 
                  className={`rounded-2xl px-4 py-3 backdrop-blur-xl border shadow-lg transition-all duration-700 delay-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'rgba(230, 126, 34, 0.3)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}>
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold" style={{ color: '#1F2937' }}>Smart</div>
                      <div className="text-xs" style={{ color: '#6B7280' }}>Organization</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screen Selection Cards */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {screens.map((screen, idx) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreen(idx)}
                className={`rounded-2xl p-6 backdrop-blur-xl border text-left transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${idx === activeScreen ? 'shadow-xl' : 'shadow-lg'}`}
                style={{
                  backgroundColor: idx === activeScreen ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
                  borderColor: idx === activeScreen ? `${screen.color}66` : 'rgba(200, 200, 200, 0.3)',
                  borderWidth: idx === activeScreen ? '2px' : '1px',
                  transitionDelay: `${200 * idx}ms`
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{
                    backgroundColor: idx === activeScreen ? screen.color : `${screen.color}33`
                  }}>
                    <div style={{ color: idx === activeScreen ? '#FFF' : screen.color }}>
                      {screen.icon}
                    </div>
                  </div>
                  {idx === activeScreen && (
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: screen.color }}></div>
                  )}
                </div>
                <h4 className="text-lg font-bold mb-1" style={{ color: '#1F2937' }}>{screen.title}</h4>
                <p className="text-sm" style={{ color: '#6B7280' }}>{screen.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Mic className="h-6 w-6" />,
              title: "Automated Note Taking",
              description: "Real-time transcription and AI-driven categorization help capture and organize notes, focusing on key concepts.",
              color: '#e67e22'
            },
            {
              icon: <Headphones className="h-6 w-6" />,
              title: "Audio Notes for Multitasking",
              description: "Converts notes into audio format, allowing review on the go, maximizing productivity during commutes or activities.",
              color: '#9B5DE5'
            },
            {
              icon: <Brain className="h-6 w-6" />,
              title: "AI Generated Quizzes",
              description: "Automatically creates quizzes from lecture notes, testing understanding and enhancing retention for better exam preparation.",
              color: '#e67e22'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-6 backdrop-blur-xl border shadow-lg transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: `${feature.color}33`,
                transitionDelay: `${800 + (200 * index)}ms` 
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg" style={{
                backgroundColor: `${feature.color}20`,
                color: feature.color
              }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>{feature.title}</h3>
              <p className="mb-4" style={{ color: '#6B7280' }}>{feature.description}</p>
              
              <a 
                href="/features" 
                className="inline-flex items-center text-sm font-bold transition-colors hover:translate-x-1 transform duration-200"
                style={{ color: feature.color }}
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;