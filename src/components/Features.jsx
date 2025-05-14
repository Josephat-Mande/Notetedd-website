import { useState, useEffect, useRef } from 'react';
import { Mic, BookOpen, BrainCircuit, Clock, Lightbulb, Headphones } from 'lucide-react';

const Features = () => {
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

  const featureItems = [
    {
      icon: <Mic />,
      title: "Automated Note Taking",
      description: "Real-time lecture transcription with AI-driven categorization to help students capture key concepts without hassle.",
      color: "from-purple-600 to-indigo-500"
    },
    {
      icon: <BookOpen />,
      title: "Smart Organization",
      description: "Automatically categorize and organize notes by topic, making it easier to find and review specific content.",
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: <BrainCircuit />,
      title: "AI Generated Quizzes",
      description: "Create custom quizzes from lecture content to test understanding and enhance exam preparation.",
      color: "from-green-600 to-emerald-500"
    },
    {
      icon: <Headphones />,
      title: "Audio Notes",
      description: "Convert written notes to audio format, allowing students to review content while commuting or multitasking.",
      color: "from-red-600 to-rose-500"
    },
    {
      icon: <Clock />,
      title: "Time-Saving",
      description: "Reclaim hours spent on manual note-taking and organization to focus on understanding complex concepts.",
      color: "from-amber-600 to-yellow-500"
    },
    {
      icon: <Lightbulb />,
      title: "Focus Enhancement",
      description: "Combat lecture attention span limitations by ensuring all content is captured, even beyond peak concentration time.",
      color: "from-indigo-600 to-blue-500"
    }
  ];

  return (
    <section 
      id="features" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powerful <span className="text-purple-400">Features</span></h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            NoteTedd combines cutting-edge AI technology with thoughtful design to transform how students learn and study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 relative overflow-hidden transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              {/* Background glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full opacity-20 blur-xl`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} mb-4 text-white shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-12 text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a 
            href="#DemoShowcase" 
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            See NoteTedd in Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;