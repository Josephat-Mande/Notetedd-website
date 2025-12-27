import { useState, useEffect, useRef } from 'react';
import { Star, Quote, Users, TrendingUp, Award } from 'lucide-react';
import Navbar from './Navbar';  
import Footer from './Footer';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const handlediscord=()=>{
    window.location.href="https://discord.gg/axt3G9T8";
  }

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

  const testimonials = [
    {
      name: "Stacey",
      role: "Economics Student",
      image: "/stacey.jpg",
      text: "NoteTedd has completely changed how I study. The AI-generated quizzes helped me prepare for exams in half the time, and the audio notes let me review material during my daily commute.",
      stars: 5,
      color: "#e67e22",
      gradient: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)"
    },
    {
      name: "Elizabeth",
      role: "Medical Student",
      image: "/mwende.jpg",
      text: "As a medical student juggling clinical rotations and lectures, NoteTedd has been a lifesaver. The automated note-taking lets me focus on understanding complex concepts rather than frantically writing everything down.",
      stars: 5,
      color: "#9B5DE5",
      gradient: "linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)"
    },
    {
      name: "Joe",
      role: "Business Student & Part-time Worker",
      image: "/joee.jpg",
      text: "Working part-time while studying was overwhelming until I found NoteTedd. Now I can convert lectures to audio and study during my shifts. The smart organization feature helps me quickly find specific topics during revision.",
      stars: 5,
      color: "#e67e22",
      gradient: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)"
    }
  ];

  const stats = [
    { icon: <Users className="h-5 w-5" />, value: "5,000+", label: "Happy Students", color: "#e67e22" },
    { icon: <TrendingUp className="h-5 w-5" />, value: "87%", label: "Grade Improvement", color: "#9B5DE5" },
    { icon: <Award className="h-5 w-5" />, value: "4.9/5", label: "Average Rating", color: "#e67e22" }
  ];

  return (
    <>
      <Navbar />
    <>
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
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
            <Star className="h-4 w-4 mr-2 fill-current" />
            Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            What <span style={{ color: '#9B5DE5' }}>Students</span> Say
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Hear from students who transformed their learning experience with NoteTedd.
          </p>
        </div>

        {/* Stats Bar */}
        <div 
          className={`grid grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="rounded-2xl p-4 backdrop-blur-xl border text-center shadow-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: `${stat.color}33`
              }}
            >
              <div className="flex items-center justify-center mb-2">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center mr-2"
                  style={{ 
                    backgroundColor: `${stat.color}20`,
                    color: stat.color 
                  }}
                >
                  {stat.icon}
                </div>
                <p className="text-2xl md:text-3xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
              </div>
              <p className="text-xs md:text-sm font-medium" style={{ color: '#6B7280' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`rounded-2xl p-6 backdrop-blur-xl border shadow-lg relative overflow-hidden transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                backgroundColor: hoveredCard === index ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
                borderColor: hoveredCard === index ? `${testimonial.color}66` : `${testimonial.color}33`,
                borderWidth: hoveredCard === index ? '2px' : '1px',
                transitionDelay: `${300 + (150 * index)}ms` 
              }}
            >
              {/* Background glow */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, ${testimonial.color} 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                  opacity: hoveredCard === index ? 0.2 : 0.1
                }}
              ></div>
              
              {/* Quote icon */}
              <div 
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ background: testimonial.gradient }}
              >
                <Quote size={20} className="text-white" />
              </div>
              
              <div className="relative z-10 pt-6">
                {/* Testimonial text */}
                <div className="mb-6">
                  <p className="italic leading-relaxed" style={{ color: '#4B5563' }}>
                    "{testimonial.text}"
                  </p>
                </div>
                
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="fill-current mr-1"
                      style={{ color: testimonial.color }}
                    />
                  ))}
                </div>
                
                {/* Author info */}
                <div className="flex items-center pt-4 border-t" style={{ borderColor: `${testimonial.color}33` }}>
                  <div 
                    className="w-12 h-12 rounded-full mr-4 shadow-lg overflow-hidden flex items-center justify-center text-white font-bold"
                    style={{ background: testimonial.gradient }}
                  >
                    {/* Placeholder - replace with actual image */}
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#1F2937' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm" style={{ color: '#6B7280' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div 
          className={`rounded-3xl p-10 backdrop-blur-xl border shadow-2xl max-w-4xl mx-auto relative overflow-hidden transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(155, 93, 229, 0.3)',
            transitionDelay: '800ms' 
          }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full animate-pulse opacity-20" style={{ 
                  background: 'linear-gradient(135deg, #9B5DE5 0%, #e67e22 100%)' 
                }}></div>
                <div 
                  className="absolute inset-2 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' }}
                >
                  <Users size={40} className="text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: '#1F2937' }}>
                Join Our Community
              </h3>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                Join thousands of students who are saving time and improving grades with 
                <span className="font-bold" style={{ color: '#9B5DE5' }}> NoteTedd</span>.
              </p>
              <button 
              onClick={handlediscord}
                className="font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:cursor-pointer text-white"
                style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}
              >
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
    </>
  );
};

export default Testimonials;