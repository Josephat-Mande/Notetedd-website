import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Users, TrendingUp, Target, Sparkles, Rocket, Heart, Trophy, Clock, Star } from 'lucide-react';

const ProgressSoFar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    users: 0,
    satisfaction: 0,
    signups: 0,
    completion: 0
  });
  const sectionRef = useRef(null);

  const handleWaitlist = () => {
    window.open('https://forms.gle/WyBciUbvUvfjyUUh7', '_blank');
  }

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

  // Animated counter effect
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      const targets = {
        users: 150,
        satisfaction: 92,
        signups: 500,
        completion: 85
      };

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          users: Math.floor(targets.users * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          signups: Math.floor(targets.signups * progress),
          completion: Math.floor(targets.completion * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, increment);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const milestones = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "MVP Development Complete",
      description: "Successfully built and deployed our Minimum Viable Product with core features including automated transcription, AI-powered organization, and quiz generation.",
      date: "Q3 2025",
      color: "#9B5DE5",
      completed: true
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Beta Testing Phase",
      description: "Conducted extensive testing with 150+ students across 5 universities in Kenya, gathering valuable feedback on usability and feature effectiveness.",
      date: "Q4 2025",
      color: "#e67e22",
      completed: true
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "User Validation Success",
      description: "Achieved 92% user satisfaction rate with beta testers reporting significant improvements in study efficiency and grade performance.",
      date: "December 2025",
      color: "#9B5DE5",
      completed: true
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Pre-Launch Campaign",
      description: "Building anticipation with 500+ pre-signups from students eager to transform their learning experience with NoteTedd's AI capabilities.",
      date: "January-February 2026",
      color: "#e67e22",
      completed: true
    }
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: counters.users,
      suffix: "+",
      label: "Beta Testers",
      color: "#9B5DE5"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      value: counters.satisfaction,
      suffix: "%",
      label: "Satisfaction Rate",
      color: "#e67e22"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: counters.signups,
      suffix: "+",
      label: "Pre-Signups",
      color: "#9B5DE5"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      value: counters.completion,
      suffix: "%",
      label: "MVP Completion",
      color: "#e67e22"
    }
  ];

  const achievements = [
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Core AI transcription engine optimized for academic lectures",
      color: "#9B5DE5"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Smart quiz generation algorithm validated by educators",
      color: "#e67e22"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Audio note conversion feature tested across 1000+ lectures",
      color: "#9B5DE5"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Mobile and web apps synchronized for seamless experience",
      color: "#e67e22"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Data security and privacy protocols fully implemented",
      color: "#9B5DE5"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Partnership discussions with 3 major universities ongoing",
      color: "#e67e22"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      {/* Gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
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
            <Rocket className="h-4 w-4 mr-2" />
            Our Journey
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            Progress <span style={{ color: '#9B5DE5' }}>So Far</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            From concept to reality - see how we've validated NoteTedd with real students and built a product they love
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="rounded-2xl p-6 backdrop-blur-xl border text-center shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: `${stat.color}33`
              }}
            >
              <div 
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                style={{ 
                  backgroundColor: `${stat.color}20`,
                  color: stat.color
                }}
              >
                {stat.icon}
              </div>
              <div className="text-4xl font-extrabold mb-2" style={{ color: stat.color }}>
                {stat.value}{stat.suffix}
              </div>
              <p className="text-sm font-bold" style={{ color: '#6B7280' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Milestones Timeline */}
        <div 
          className={`mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h3 className="text-3xl font-extrabold text-center mb-12" style={{ color: '#1F2937' }}>
            Key Milestones
          </h3>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row gap-6 transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${600 + (index * 100)}ms` }}
              >
                {/* Timeline dot and line */}
                <div className="hidden md:flex flex-col items-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg relative z-10"
                    style={{ 
                      background: `linear-gradient(135deg, ${milestone.color} 0%, ${milestone.color}CC 100%)`,
                      color: '#FFF'
                    }}
                  >
                    {milestone.icon}
                  </div>
                  {index < milestones.length - 1 && (
                    <div 
                      className="w-1 h-full mt-2"
                      style={{ 
                        background: `linear-gradient(180deg, ${milestone.color} 0%, ${milestones[index + 1].color} 100%)`,
                        minHeight: '60px'
                      }}
                    ></div>
                  )}
                </div>

                {/* Content card */}
                <div 
                  className="flex-1 rounded-2xl p-6 backdrop-blur-xl border shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderColor: `${milestone.color}33`
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3 md:hidden">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${milestone.color} 0%, ${milestone.color}CC 100%)`,
                          color: '#FFF'
                        }}
                      >
                        {milestone.icon}
                      </div>
                      <h4 className="text-xl font-bold" style={{ color: '#1F2937' }}>
                        {milestone.title}
                      </h4>
                    </div>
                    <h4 className="hidden md:block text-xl font-bold" style={{ color: '#1F2937' }}>
                      {milestone.title}
                    </h4>
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ 
                        backgroundColor: `${milestone.color}20`,
                        color: milestone.color
                      }}
                    >
                      <Clock className="inline h-3 w-3 mr-1" />
                      {milestone.date}
                    </div>
                  </div>
                  <p className="leading-relaxed" style={{ color: '#6B7280' }}>
                    {milestone.description}
                  </p>
                  {milestone.completed && (
                    <div className="mt-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" style={{ color: '#10B981' }} />
                      <span className="text-sm font-bold" style={{ color: '#10B981' }}>
                        Completed
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div 
          className={`transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <h3 className="text-3xl font-extrabold text-center mb-12" style={{ color: '#1F2937' }}>
            Technical Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="rounded-2xl p-4 backdrop-blur-xl border shadow-lg flex items-start gap-3 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderColor: `${achievement.color}33`
                }}
              >
                <div 
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ 
                    backgroundColor: `${achievement.color}20`,
                    color: achievement.color
                  }}
                >
                  {achievement.icon}
                </div>
                <p className="font-medium leading-relaxed" style={{ color: '#4B5563' }}>
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div 
          className={`mt-16 rounded-3xl p-10 backdrop-blur-xl border-2 shadow-2xl max-w-4xl mx-auto relative overflow-hidden transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(155, 93, 229, 0.3)',
            transitionDelay: '1200ms' 
          }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>
          
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg" style={{
              background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)'
            }}>
              <Star size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
              Be Part of Our Launch
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Support or Join our growing community and be among the first to experience the full power of NoteTedd when we launch
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleWaitlist}
                className="font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
                style={{ background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' }}
              >
                
                Join Waitlist
              </button>
              <button 
                    onClick={() => window.location.href = '/contact'}
                className="font-bold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-xl border-2 hover:scale-105 shadow-lg"
                style={{ 
                  borderColor: 'rgba(230, 126, 34, 0.4)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#e67e22'
                }}
              > 
                Investor Enquiries
              </button>
              <button 
              onClick={() => window.location.href = 'mailto:notetedd@gmail.com'}
                className="font-bold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-xl border-2 hover:scale-105 shadow-lg"
                style={{ 
                  borderColor: 'rgba(230, 126, 34, 0.4)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#e67e22'
                }}
              >
                Be part of Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSoFar;