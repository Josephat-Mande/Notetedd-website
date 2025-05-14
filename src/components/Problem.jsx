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
      color: "from-red-600 to-orange-600"
    },
    {
      id: 2,
      icon: <BrainCircuit />,
      title: "Concentration Span and Lecture Duration Gap",
      description: "The average attention span is 10-15 minutes, while standard lectures last 3 hours. Students often miss key content beyond their peak concentration time.",
      color: "from-amber-600 to-yellow-500"
    },
    {
      id: 3,
      icon: <FileText />,
      title: "Inefficient Note Taking and Organization",
      description: "Many students struggle with manual note-taking during lectures, leading to incomplete or disorganized notes, affecting review and retention.",
      color: "from-orange-600 to-red-500"
    },
    {
      id: 4,
      icon: <AlertTriangle />,
      title: "Irrelevant Content Overload",
      description: "Lectures often include digressions or non-essential information, making it hard for students to focus on critical points needed for studying and exams.",
      color: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-950 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The <span className="text-red-400">Problems</span> We Solve</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            University, college and TVET physical lectures often have gaps that impact content mastery, revision scope, and organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={problem.id}
              className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 relative overflow-hidden transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              {/* Background glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${problem.color} rounded-full opacity-20 blur-xl`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${problem.color} mb-4 text-white shadow-lg`}>
                  {problem.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">{problem.title}</h3>
                <p className="text-gray-300">{problem.description}</p>
                
                {problem.id === 2 && (
                  <div className="mt-4 bg-gray-800/50 rounded-lg p-4">
                    <div className="relative h-6 bg-gray-700 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-1/6 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 text-xs text-white">3 hour lecture</div>
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs text-white">15 min</div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-center">Average attention span vs. standard lecture duration</p>
                  </div>
                )}
                
                {problem.id === 1 && (
                  <div className="mt-4 flex justify-center">
                    <div className="w-48 h-12 rounded-lg bg-gray-800 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-amber-500 opacity-40" style={{ width: '75%' }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <span className="text-xs text-white">Limited Study Time</span>
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
          className={`mt-12 bg-red-900/20 border border-red-800/30 rounded-xl p-6 max-w-3xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center">
                  <AlertTriangle size={40} className="text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-red-400 mb-2">Most Affected Students</h3>
              <p className="text-gray-300">
                Students who are parents, working shifts to support themselves, or guardians to younger siblings have 
                <span className="text-red-300 font-medium"> insanely busy schedules</span> and are hit hardest by these problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;