import { useState, useEffect, useRef } from 'react';
import { Clock, BrainCircuit, FileText, AlertTriangle } from 'lucide-react';

const Problem = () => {
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

  const problems = [
    {
      id: 1,
      icon: <Clock />,
      title: "Time Constraints for Revision",
      description: "With busy schedules, students have limited time for manual study preparations, like summarizing notes or creating quizzes, and they miss opportunities to utilize downtime.",
      color: "#e67e22"
    },
    {
      id: 2,
      icon: <BrainCircuit />,
      title: "Concentration Span and Lecture Duration Gap",
      description: "The average attention span is 10-15 minutes, while standard lectures last 3 hours. Students often miss key content beyond their peak concentration time.",
      color: "#9B5DE5"
    },
    {
      id: 3,
      icon: <FileText />,
      title: "Inefficient Note Taking and Organization",
      description: "Many students struggle with manual note-taking during lectures, leading to incomplete or disorganized notes, affecting review and retention.",
      color: "#e67e22"
    },
    {
      id: 4,
      icon: <AlertTriangle />,
      title: "Irrelevant Content Overload",
      description: "Lectures often include digressions or non-essential information, making it hard for students to focus on critical points needed for studying and exams.",
      color: "#9B5DE5"
    }
  ];

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      {/* Gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
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
            The Challenge
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            The <span style={{ color: '#e67e22' }}>Problems</span> We Solve
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            University, college and TVET physical lectures often have gaps that impact content mastery, revision scope, and organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={problem.id}
              className={`rounded-2xl p-8 backdrop-blur-xl border shadow-lg relative overflow-hidden transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: `${problem.color}33`,
                transitionDelay: `${150 * index}ms` 
              }}
            >
              {/* Background glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10" style={{
                background: `radial-gradient(circle, ${problem.color} 0%, transparent 70%)`,
                filter: 'blur(40px)'
              }}></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 shadow-lg" style={{
                  backgroundColor: `${problem.color}20`,
                  color: problem.color
                }}>
                  {problem.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>{problem.title}</h3>
                <p style={{ color: '#6B7280' }}>{problem.description}</p>
                
                {problem.id === 2 && (
                  <div className="mt-6 rounded-xl p-4 backdrop-blur-xl border" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderColor: 'rgba(155, 93, 229, 0.2)'
                  }}>
                    <div className="relative h-6 rounded-full overflow-hidden" style={{ backgroundColor: '#E5E7EB' }}>
                      <div className="absolute top-0 left-0 h-full w-1/6 rounded-full" style={{ backgroundColor: '#9B5DE5' }}></div>
                      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 text-xs font-medium" style={{ color: '#6B7280' }}>3 hour lecture</div>
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs font-bold" style={{ color: '#1F2937' }}>15 min</div>
                    </div>
                    <p className="text-xs font-medium mt-2 text-center" style={{ color: '#6B7280' }}>Average attention span vs. standard lecture duration</p>
                  </div>
                )}
                
                {problem.id === 1 && (
                  <div className="mt-6 flex justify-center">
                    <div className="w-48 h-12 rounded-xl relative overflow-hidden backdrop-blur-xl border shadow-lg" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      borderColor: 'rgba(230, 126, 34, 0.2)'
                    }}>
                      <div className="absolute top-0 left-0 h-full opacity-30" style={{ 
                        width: '75%',
                        backgroundColor: '#e67e22'
                      }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#e67e22' }}></div>
                          <span className="text-xs font-bold" style={{ color: '#1F2937' }}>Limited Study Time</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-12 rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-xl border shadow-lg transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(230, 126, 34, 0.3)',
            transitionDelay: '600ms'
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full animate-pulse opacity-20" style={{ backgroundColor: '#e67e22' }}></div>
                <div className="absolute inset-2 rounded-full flex items-center justify-center shadow-lg" style={{ 
                  background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)'
                }}>
                  <AlertTriangle size={40} className="text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#e67e22' }}>Most Affected Students</h3>
              <p style={{ color: '#6B7280' }}>
                Students who are parents, working shifts to support themselves, or guardians to younger siblings have 
                <span className="font-bold" style={{ color: '#e67e22' }}> insanely busy schedules</span> and are hit hardest by these problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;