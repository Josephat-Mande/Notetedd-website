import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Headphones, Book, CalendarCheck, Sparkles, Zap, Mail } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
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

  const handleSubmit = () => {
    // Handle email submission
    console.log('Email submitted:', email);
    alert('Thanks for joining the waitlist!');
    setEmail('');
  };

  const features = [
    { icon: <Headphones size={20} />, text: 'Audio Notes', color: '#e67e22' },
    { icon: <Book size={20} />, text: 'Smart Transcripts', color: '#9B5DE5' },
    { icon: <CalendarCheck size={20} />, text: 'Exam Prep', color: '#e67e22' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden" 
      id='contact'
      style={{ backgroundColor: '#F5F7FA' }}
    >
      {/* Gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Main CTA Container */}
        <div 
          className={`rounded-3xl backdrop-blur-xl border-2 shadow-2xl p-8 lg:p-12 relative overflow-hidden transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(155, 93, 229, 0.3)'
          }}
        >
          {/* Background floating elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* Text Content */}
            <div 
              className={`lg:w-3/5 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold mb-6 backdrop-blur-xl border shadow-lg" style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: 'rgba(230, 126, 34, 0.3)',
                color: '#e67e22'
              }}>
                <Sparkles className="h-4 w-4 mr-2" />
                Start Your Journey
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
                Transform Your <span style={{ color: '#9B5DE5' }}>Learning</span> Experience Today
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed" style={{ color: '#6B7280' }}>
                Join thousands of students who are maximizing their study potential with NoteTedd's 
                AI-powered learning assistant. Get automated notes, personalized quizzes, and audio 
                summaries - all in one place.
              </p>
              
              {/* Feature Icons Row */}
              <div className="flex flex-wrap gap-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 backdrop-blur-xl border shadow-lg transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderColor: `${feature.color}33`
                    }}
                  >
                    <div 
                      className="p-2 rounded-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}CC 100%)`,
                        color: '#FFF'
                      }}
                    >
                      {feature.icon}
                    </div>
                    <span className="font-bold" style={{ color: '#1F2937' }}>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                        style={{ 
                          background: i % 2 === 0 ? 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' : 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)'
                        }}
                      >
                        {String.fromCharCode(65 + i - 1)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#6B7280' }}>5,000+ students</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5" fill="#e67e22" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium" style={{ color: '#6B7280' }}>4.9/5 rating</span>
                </div>
              </div>
            </div>
            
            {/* CTA Card */}
            <div 
              className={`lg:w-2/5 w-full transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="rounded-2xl backdrop-blur-xl border-2 p-8 shadow-xl" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: 'rgba(155, 93, 229, 0.3)'
              }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-extrabold" style={{ color: '#1F2937' }}>
                    Get Started Now
                  </h3>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' }}
                  >
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: '#1F2937' }}>
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: '#9B5DE5' }} />
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@university.edu" 
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 backdrop-blur-xl transition-all duration-300"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.7)',
                          borderColor: 'rgba(155, 93, 229, 0.3)',
                          color: '#1F2937',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleSubmit}
                    className="w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl text-white hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}
                  >
                    Join the Waitlist
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-sm" style={{ color: '#6B7280' }}>
                      🎉 <span className="font-bold">Early access</span> coming soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Quote */}
          <div 
            className={`mt-12 rounded-2xl backdrop-blur-xl border-l-4 p-6 max-w-3xl mx-auto transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderColor: '#9B5DE5',
              transitionDelay: '600ms'
            }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg"
                style={{ background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' }}
              >
                S
              </div>
              <div>
                <p className="italic mb-3 leading-relaxed" style={{ color: '#4B5563' }}>
                  "NoteTedd has completely transformed how I study. I no longer struggle with organizing lecture notes or finding time to study. It's like having a personal learning assistant!"
                </p>
                <p className="font-bold" style={{ color: '#9B5DE5' }}>
                  — Sarah T., Computer Science Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;