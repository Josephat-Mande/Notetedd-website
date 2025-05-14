import { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const testimonials = [
    {
      name: "Stacey",
      role: "Economics Student",
      image: "/stacey.jpg",
      text: "NoteTedd has completely changed how I study. The AI-generated quizzes helped me prepare for exams in half the time, and the audio notes let me review material during my daily commute.",
      stars: 5,
      color: "from-purple-600 to-indigo-500"
    },
    {
      name: "Elizabeth",
      role: "Medical Student",
      image: "/mwende.jpg",
      text: "As a medical student juggling clinical rotations and lectures, NoteTedd has been a lifesaver. The automated note-taking lets me focus on understanding complex concepts rather than frantically writing everything down.",
      stars: 5,
      color: "from-blue-600 to-cyan-500"
    },
    {
      name: "Joe",
      role: "Business Student & Part-time Worker",
      image: "/joee.jpg",
      text: "Working part-time while studying was overwhelming until I found NoteTedd. Now I can convert lectures to audio and study during my shifts. The smart organization feature helps me quickly find specific topics during revision.",
      stars: 5,
      color: "from-green-600 to-emerald-500"
    }
  ];

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden bg-gray-950"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-950 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Student <span className="text-purple-400">Success Stories</span></h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Hear from students who transformed their learning experience with NoteTedd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 relative overflow-hidden transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              {/* Background glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${testimonial.color} rounded-full opacity-20 blur-xl`}></div>
              
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-600 to-indigo-500 p-2 rounded-full text-white shadow-lg z-10">
                <Quote size={20} />
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 pt-4">
                  <p className="text-gray-300 italic">{testimonial.text}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-700"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={14} className="fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-12 bg-purple-900/20 border border-purple-800/30 rounded-xl p-6 max-w-3xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <Star size={32} className="text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-purple-400 mb-2 text-center md:text-left">Join Our Community</h3>
              <p className="text-gray-300 text-center md:text-left">
                Join thousands of students who are saving time and improving grades with 
                <span className="text-purple-300 font-medium"> NoteTedd's AI-powered learning tools</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;