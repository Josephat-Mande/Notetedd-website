import { useState, useEffect } from 'react';
import { BookOpen, Brain, Sparkles, Zap, Mic, TrendingUp, Users, MessageSquare, FileText, Award ,Camera, Timer } from 'lucide-react';
import { href } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: Mic, text: 'Transcribe seamlessly', color: '#e67e22' },
    { icon: MessageSquare, text: 'Smart Summaries,diagrams & flashcards', color: '#9B5DE5' },
    { icon: FileText, text: 'Gauge yourself with quizzes', color: '#e67e22' },
    { icon: Award, text: 'Sync with Google Classroom', color: '#9B5DE5' },
    { icon: Camera, text: 'Turn whiteboard snaps into notes', color: '#9B5DE5' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero"  className="min-h-screen relative overflow-hidden pt-32 pb-20 px-4 backdrop-blur-3xl" style={{ backgroundColor: '#F5F7FA'  }}>
 
      {/* Gradient orbs in background */}
      {/* image background src="./bg.jpg" */}
      <div 
       className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full opacity-30" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute -bottom-20 -left-32 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Hero Text */}
          <div 
            className={`lg:w-1/2 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold mb-6 backdrop-blur-xl border shadow-lg" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderColor: 'rgba(230, 126, 34, 0.3)',
              color: '#e67e22'
            }}>
              
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight" style={{ color: '#1F2937' }}>
              Turn Lectures Into
              <br/>
              <span className="relative inline-block mt-2">
                <span className="bg-orange-500  bg-clip-text text-transparent">
                  Smart Notes
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 5 100 2 150 5C200 8 250 4 298 8" stroke="#e67e22" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl mb-10 max-w-xl leading-relaxed" style={{ color: '#6B7280' }}>
              NoteTedd transforms your lectures into organized, AI-enhanced notes with automatic summaries, quizzes, and study guides. Study smarter, achieve more.
            </p>
            
            <div onClick={() => window.location.href = '/download'} className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative overflow-hidden font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:cursor-pointer text-white" style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}>
                <span className="relative z-10 flex items-center justify-center">
                  Get Started Free
                  
                </span>
              </button>
              <button onClick={() => window.open('http://www.youtube.com/@NoteTedd', '_blank')} className="font-bold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-xl border-2 hover:scale-105 hover:cursor-pointer shadow-lg" style={{ 
                borderColor: 'rgba(155, 93, 229, 0.4)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: '#9B5DE5'
              }}>
                Watch Demo →
              </button>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl p-4 backdrop-blur-xl border text-center shadow-lg" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: 'rgba(230, 126, 34, 0.2)'
              }}>
                <div className="flex items-center justify-center mb-1">
                  <Timer className="h-5 w-5 mr-1" style={{ color: '#e67e22' }} />
                  <p className="text-3xl font-bold" style={{ color: '#e67e22' }}>60% </p>
                </div>
                <p className="text-xs font-medium" style={{ color: '#6B7280' }}>Time saved in revision</p>
              </div>
              <div className="rounded-2xl p-4 backdrop-blur-xl border text-center shadow-lg" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: 'rgba(155, 93, 229, 0.2)'
              }}>
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="h-5 w-5 mr-1" style={{ color: '#9B5DE5' }} />
                  <p className="text-3xl font-bold" style={{ color: '#9B5DE5' }}>87%</p>
                </div>
                <p className="text-xs font-medium" style={{ color: '#6B7280' }}>Better Grades</p>
              </div>
              <div className="rounded-2xl p-4 backdrop-blur-xl border text-center shadow-lg" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: 'rgba(230, 126, 34, 0.2)'
              }}>
                <div className="flex items-center justify-center mb-1">
                  {/* <Brain className="h-5 w-5 mr-1" style={{ color: '#e67e22' }} /> */}
                  <p className="text-3xl font-bold" style={{ color: '#e67e22' }}>50K+</p>
                </div>
                <p className="text-xs font-medium" style={{ color: '#6B7280' }}>Organized Lectures</p>
              </div>
            </div>
          </div>
          
          {/* Interactive Feature Display */}
          <div 
            className={`lg:w-1/2 relative transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Central glass card with rotating features */}
              <div className="relative rounded-3xl p-8 backdrop-blur-2xl border-2 shadow-2xl" style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: 'rgba(230, 126, 34, 0.2)'
              }}>
                <div className="aspect-square flex flex-col items-center justify-center">
                  {/* Animated icon circle */}
                  <div className="relative w-32 h-32 mb-8">
                    <div className="absolute inset-0 rounded-full animate-spin-slow" style={{
                      background: 'conic-gradient(from 0deg, #e67e22, #9B5DE5, #e67e22)',
                      opacity: 0.3
                    }}></div>
                    <div className="absolute inset-2 rounded-full backdrop-blur-xl flex items-center justify-center shadow-lg" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                          <Icon
                            key={idx}
                            className={`absolute h-12 w-12 transition-all duration-500 ${
                              idx === activeFeature ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                            }`}
                            style={{ color: feature.color }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Feature text */}
                  <div className="text-center mb-8 h-16">
                    {features.map((feature, idx) => (
                      <h3
                        key={idx}
                        className={`text-xl font-bold transition-all duration-500 absolute left-0 right-0 ${
                          idx === activeFeature ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ color: '#1F2937' }}
                      >
                        {feature.text}
                      </h3>
                    ))}
                  </div>
                  
                  {/* Progress dots */}
                  <div className="flex gap-2">
                    {features.map((_, idx) => (
                      <div
                        key={idx}
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: idx === activeFeature ? '32px' : '8px',
                          backgroundColor: idx === activeFeature ? '#e67e22' : '#E5E7EB'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              
              
              
              
             
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center backdrop-blur-xl" style={{ 
          borderColor: '#6B7280',
          backgroundColor: 'rgba(255, 255, 255, 0.5)'
        }}>
          <div className="w-1 h-2 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#e67e22' }}></div>
        </div>
      </div>
      
      <style jsx>{`
        
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;