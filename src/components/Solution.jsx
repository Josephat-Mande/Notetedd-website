import { useState, useEffect, useRef } from 'react';
import { Mic, Sparkles, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';

const Solution = () => {
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

  return (
    <section 
      id="solution" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-40 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            The <span className="text-purple-400">Solution</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            NoteTedd is an AI-powered learning assistant that not only transcribes live lectures but also predicts quiz questions based on lecture content.
          </p>
        </div>

        <div className="relative">
          {/* Large central phone mockup */}
          <div 
            className={`max-w-sm mx-auto mb-12 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="bg-gray-800 rounded-3xl p-3 shadow-2xl border-4 border-gray-700">
                <div className="relative rounded-2xl overflow-hidden aspect-[9/19.5] bg-gradient-to-br from-indigo-900 to-purple-900">
                  {/* App UI */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* App header */}
                    <div className="bg-indigo-950 p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-5 w-5 text-purple-400" />
                        <span className="font-semibold text-white">NoteTedd</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center">
                          <Mic className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="flex-1 overflow-hidden p-4">
                      <div className="mb-4">
                        <div className="text-sm text-purple-300 font-medium">Data Structures & Algorithms</div>
                        <div className="text-xs text-gray-400">Live Lecture • 10:42 AM</div>
                      </div>
                      
                      <div className="space-y-3">
                        {/* Transcript chunks */}
                        <div className="bg-indigo-900/40 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-sm text-gray-300">
                            "...Binary search trees provide efficient operations for searching, insertion and deletion..."
                          </p>
                        </div>
                        
                        <div className="bg-indigo-900/40 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-sm text-gray-300">
                            "...The time complexity for these operations is O(log n) in the average case..."
                          </p>
                        </div>
                        
                        {/* Key concept highlight */}
                        <div className="bg-purple-800/30 border border-purple-700/30 rounded-lg p-3">
                          <div className="flex items-center mb-1">
                            <Lightbulb className="h-4 w-4 text-yellow-400 mr-2" />
                            <span className="text-sm font-medium text-purple-300">Key Concept</span>
                          </div>
                          <p className="text-sm text-white">
                            Binary search trees have O(log n) search time complexity, making them more efficient than arrays for large datasets.
                          </p>
                        </div>
                        
                        {/* Active recording indicator */}
                        <div className="bg-indigo-900/40 backdrop-blur-sm rounded-lg p-3 relative">
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full pulse-animation"></div>
                          <p className="text-sm text-gray-300">
                            "...However, in the worst case, if the tree becomes unbalanced..."
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* App footer */}
                    <div className="bg-indigo-950 p-3 flex items-center justify-around">
                      <div className="flex flex-col items-center">
                        <div className="w-5 h-5 bg-purple-400 rounded-full flex items-center justify-center">
                          <BookOpen className="h-3 w-3 text-indigo-900" />
                        </div>
                        <div className="mt-1 h-1 w-10 bg-purple-400 rounded-full"></div>
                      </div>
                      <div className="w-5 h-5 bg-indigo-800/50 rounded-full"></div>
                      <div className="w-5 h-5 bg-indigo-800/50 rounded-full"></div>
                      <div className="w-5 h-5 bg-indigo-800/50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated feature indicators */}
              <div className="absolute -left-20 top-1/4 transform -translate-y-1/2">
                <div 
                  className={`bg-purple-900/80 backdrop-blur-sm border border-purple-700/50 rounded-lg p-3 shadow-lg transition-all duration-700 delay-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white">
                      <Mic className="h-4 w-4" />
                    </div>
                    <div className="text-sm font-medium text-white">Automated Transcription</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-24 top-1/2">
                <div 
                  className={`bg-indigo-900/80 backdrop-blur-sm border border-indigo-700/50 rounded-lg p-3 shadow-lg transition-all duration-700 delay-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div className="text-sm font-medium text-white">Smart Organization</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-32 bottom-1/4">
                <div 
                  className={`bg-blue-900/80 backdrop-blur-sm border border-blue-700/50 rounded-lg p-3 shadow-lg transition-all duration-700 delay-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white">
                      <Lightbulb className="h-4 w-4" />
                    </div>
                    <div className="text-sm font-medium text-white">Quiz Generation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: <Mic />,
                title: "Automated Note Taking",
                description: "Real-time transcription and AI-driven categorization help capture and organize notes, focusing on key concepts.",
                delay: 200,
                gradient: "from-purple-500 to-indigo-600"
              },
              {
                icon: <BookOpen />,
                title: "Audio Notes for Multitasking",
                description: "Converts notes into audio format, allowing review on the go, maximizing productivity during commutes or activities.",
                delay: 400,
                gradient: "from-indigo-500 to-blue-600"
              },
              {
                icon: <Sparkles />,
                title: "AI Generated Quizzes",
                description: "Automatically creates quizzes from lecture notes, testing understanding and enhancing retention for better exam preparation.",
                delay: 600,
                gradient: "from-blue-500 to-cyan-600"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4 text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                
                <a 
                  href="#features" 
                  className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS for pulsing animation */}
      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(220, 38, 38, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default Solution;