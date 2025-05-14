import { useState, useEffect } from 'react';
import { BookOpen, Brain, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-32 pb-20 px-4">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-3/4 -right-24 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Text */}
          <div 
            className={`lg:w-1/2 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-flex items-center rounded-full bg-indigo-900/30 px-3 py-1 text-sm font-medium text-purple-300 ring-1 ring-inset ring-purple-500/20 mb-6">
              <Sparkles className="mr-1 h-4 w-4" /> 
              <span>Learning Redefined</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Turn Lectures into <br/>
              <span className="relative">
                <span className="inline-block text-white transform hover:scale-105 transition-transform">
                  Knowledge<span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"></span>
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              NoteTedd is an AI-powered learning assistant that transforms how students capture, organize and learn from lectures, saving time and improving results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center">
                Get Early Access
              </button>
              <button className="border border-purple-500/50 bg-purple-900/20 hover:bg-purple-800/30 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg flex items-center justify-center">
                Watch Demo <span className="ml-2 rounded-full bg-white/20 p-1">▶</span>
              </button>
            </div>
            
            <div className="flex items-center mt-8 text-gray-400">
              <div className="flex -space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-gray-800 flex items-center justify-center text-xs font-bold">
                    {['JP', 'KL', 'MN', '+'][i]}
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm"><span className="text-purple-300 font-medium">1,000+</span> students already using NoteTedd</p>
            </div>
          </div>
          
          {/* Hero Image/Animation */}
          <div 
            className={`lg:w-1/2 relative transition-all duration-1000 delay-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative w-full h-full">
              {/* Stylized mockup of a phone with the app */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-600 rounded-full opacity-30 blur-xl"></div>
              
              <div className="relative bg-gray-900 border-4 border-gray-800 rounded-3xl p-3 shadow-2xl max-w-md mx-auto">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-10"></div>
                <div className="rounded-2xl overflow-hidden aspect-[9/19.5] bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* App mock UI */}
                  <div className="h-full w-full flex flex-col">
                    {/* App header */}
                    <div className="bg-indigo-900 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-purple-300" />
                        <span className="ml-2 font-medium text-white">NoteTedd</span>
                      </div>
                      <div className="h-6 w-6 rounded-full bg-purple-400 flex items-center justify-center text-xs">
                        JS
                      </div>
                    </div>
                    
                    {/* Mock lecture transcription */}
                    <div className="flex-1 p-3 overflow-hidden bg-gray-950">
                      <div className="text-sm text-gray-300 mb-3">
                        <span className="text-purple-400 font-medium">Advanced Physics • </span>
                        <span className="text-gray-500">Today, 10:30 AM</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-gray-800 rounded-lg p-2 animate-pulse">
                          <p className="text-xs text-gray-300">The quantum harmonic oscillator is a model system that...</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-2">
                          <p className="text-xs text-gray-300">...describes a particle moving in a potential well...</p>
                        </div>
                        <div className="bg-indigo-900/50 border border-indigo-700/50 rounded-lg p-2">
                          <div className="flex items-center mb-1">
                            <Brain className="h-3 w-3 text-purple-400 mr-1" />
                            <span className="text-xs font-medium text-purple-300">Key Concept</span>
                          </div>
                          <p className="text-xs text-gray-300">Energy levels are quantized as E = hf(n + 1/2)</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-2">
                          <p className="text-xs text-gray-300">...time-dependent solutions involve...</p>
                        </div>
                      </div>
                      
                      {/* Mock quiz generated */}
                      <div className="mt-4 bg-purple-900/30 border border-purple-700/30 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <Sparkles className="h-3 w-3 text-purple-400 mr-1" />
                          <span className="text-xs font-medium text-purple-300">Generated Quiz</span>
                        </div>
                        <p className="text-xs text-white mb-2">What is the energy equation for the quantum harmonic oscillator?</p>
                        <div className="space-y-1">
                          <div className="bg-gray-800/50 rounded p-1 text-xs text-gray-300">A. E = mc²</div>
                          <div className="bg-purple-700/50 rounded p-1 text-xs text-white">B. E = hf(n + 1/2)</div>
                          <div className="bg-gray-800/50 rounded p-1 text-xs text-gray-300">C. E = KE + PE</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App nav bar */}
                    <div className="bg-gray-900 px-4 py-2 flex items-center justify-around">
                      <div className="flex flex-col items-center">
                        <div className="h-1 w-5 bg-purple-500 rounded-full mb-1"></div>
                        <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span className="text-xs text-purple-300">1</span>
                        </div>
                      </div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around the phone */}
              <div className="absolute -left-4 top-1/4 transform -translate-y-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-3 shadow-lg animate-float">
                <Brain className="h-6 w-6 text-white" />
              </div>
              
              <div className="absolute -right-6 top-2/3 transform -translate-y-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3 shadow-lg animate-float animation-delay-1000">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll to learn more</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
      
      {/* Animation definitions */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 40px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 15s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 4s ease infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;